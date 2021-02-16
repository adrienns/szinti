import nodemailer from "nodemailer";
import auth from "./mailgun-auth.js";
import mailGun from "nodemailer-mailgun-transport";
import express from "express";
import data from "./data.js";
import cors from "cors";
import paypal from "@paypal/checkout-server-sdk";
import updateWithShippingCost from "./CalculateWithShippingCost.js";
import getItemDetails from "./Items.js";
import calculateTotals from "./CalculateTotalSum.js";
import compression from "compression";
import dotenv from "dotenv";

dotenv.config({ path: "src/.env" });
const clientId = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_SECRET_ID;

let environment;
if (false && process.env.NODE_ENV === "development") {
  environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
} else {
  environment = new paypal.core.LiveEnvironment(clientId, clientSecret);
}

const client = new paypal.core.PayPalHttpClient(environment);

const app = express();
const port = process.env.PORT || 8080;

const server_path = `http://localhost:${port}`;

// sending product data to frontend
app.use("/static", express.static("src/server/images"));
app.use(cors());
app.use(compression({ level: 6 }));

// //enable CORS
// app.all("*", function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });

app.get("/api/data", (req, res) => {
  res.send(data);
});

//API to send back the client id to front end

// app.get("/api/config/paypal", (req, res) => {
//   res.send(process.env.PAYPAL_CLIENT_ID || "sb");
// });

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(port, () => {
  console.log(`Server start at ${server_path}`);
});

//sending product data to client
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

//setting up mailgun
const transporter = nodemailer.createTransport(mailGun(auth));

//setting up mailgun  for form

const sendMail = (email, subject, text, cb) => {
  let mailOptions = {
    from: email,
    to: "vewejewelery@gmail.com",
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

//data parsing(configuring data)
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

//here we are expecting  data from the client ==> for form
app.post("/api/form", (req, res) => {
  console.log("Data:", req.body);
  const { customername, email, message } = req.body;

  sendMail(
    email,
    `You have received a new message from ${customername}`,
    message,
    (err, data) => {
      if (err) {
        res.status(500).json({ message: "Internal Error" });
      } else {
        res.json({ message: "Email sent" });
      }
    }
  );
});

// expected data from client side ==> forsuccesful payment details

app.post("/api/payment_details", (req, res) => {
  console.log("Payment details dats:", req.body);
  const {
    transactionDate,
    transactionId,
    status,
    email,
    name,
    address,
  } = req.body;
  sendMail(
    email,
    `New transaction ${transactionId} from client ${name} (email: ${email}) made on ${transactionDate}`,
    `You have received a ${status} transaction from a customer. 
    Shipping address: ${address}  
    Email: ${email}`,

    (err) => {
      if (err) {
        res.status(500).json({ message: "Internal Error" });
      } else {
        res.json({ message: "Email sent" });
      }
    }
  );
});

//receive data from client for payment

app.post("/api/payment", async (req, res) => {
  try {
    const cartData = req.body;
    const finalSum = updateWithShippingCost(cartData);
    const priceTotal = calculateTotals(cartData);
    const items = getItemDetails(cartData);
    const shippingFee = finalSum - priceTotal;

    // 3. Call PayPal to set up a transaction
    let request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
      intent: "CAPTURE",
      application_context: {
        brand_name: "Vewe Jewelry",
        landing_page: "BILLING",
        user_action: "CONTINUE",
      },
      purchase_units: [
        {
          reference_id: "PUHF",
          description: "payment for Vewe Jewelry",
          soft_descriptor: "Jewelry Fashion",
          amount: {
            currency_code: "HUF",
            value: finalSum,
            breakdown: {
              item_total: {
                currency_code: "HUF",
                value: priceTotal,
              },
              shipping: {
                currency_code: "HUF",
                value: shippingFee,
              },
            },
          },
          items: items,
        },
      ],
    });

    const response = await client.execute(request);
    console.log(`Response: ${JSON.stringify(response)}`);
    const orderID = response.result.id;
    console.log(`Order: ${JSON.stringify(response.result)}`);
    const resJson = { orderID };
    res.json(resJson);
  } catch (err) {
    console.error(err);
    return res.send(500);
  }
});

app.post("/api/paypal-transaction-complete", async (req, res) => {
  const orderID = req.body.orderID;
  const request = new paypal.orders.OrdersCaptureRequest(orderID);
  request.requestBody({});
  try {
    const capture = await client.execute(request);
    debugger;
    console.log(`Response: ${JSON.stringify(capture)}`);
    console.log(`Capture: ${JSON.stringify(capture.result)}`);
    const result = capture.result;
    const resJson = { result };
    res.json(resJson);

    // return capture.result;
  } catch (err) {
    // 5. Handle any errors from the call
    console.error(err);
    return res.send(500);
  }
});

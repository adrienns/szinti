import nodemailer from "nodemailer";
import auth from "./mailgun-auth.js";
import mailGun from "nodemailer-mailgun-transport";
import express from "express";
import data from "./data.js";
import cors from "cors";
import paypal from "@paypal/checkout-server-sdk";
import updateWithShippingCost from "./CalculateWithShippingCost.js";
import getItemDetails from "./Items.js";
import GetShippingDetails from "./GetShippingDetails.js";
import calculateTotals from "./CalculateTotalSum.js";
import compression from "compression";

const clientId =
  "Aaw6AON0AFfJ_T-Mzq06vZTF9j5eYJ0j7CBd1mO9glFHduMIVLVKyUkVb9T8MqyKz9pS1U5zGwTADJf_";
const clientSecret =
  "EBSxkhJmuCUt1vjPz1pRQFQO2lSm7l4f2jMlODbfEoR0W6V7UruTCA-vgJRPMib5lUNxmYGNgbfv_Und";
const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

const app = express();
const port = process.env.PORT || 8080;

const server_path = `http://localhost:${port}`;
const client_path = "http://localhost:1234";

// sending product data to frontend
app.use("/static", express.static("src/server/images"));
app.use(cors());
app.use(compression({ level: 6 }));

//enable CORS
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

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
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

//setting up mailgun

const transporter = nodemailer.createTransport(mailGun(auth));

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

//here we are expecting data from the client
app.post("/api/form", (req, res) => {
  console.log("Data:", req.body);
  const { customername, email, message } = req.body;

  sendMail(email, customername, message, (err, data) => {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
    } else {
      res.json({ message: "Email sent" });
    }
  });
});

//receive data from client,  creating API

app.post("/api/payment", async (req, res) => {
  try {
    const cartData = req.body;
    const finalSum = updateWithShippingCost(cartData);
    const priceTotal = calculateTotals(cartData);
    const billingAddress = GetShippingDetails(cartData);
    const items = getItemDetails(cartData);
    const shippingFee = finalSum - priceTotal;
    const shipping = shippingFee.toFixed(2);
    console.log(finalSum, billingAddress, items, shipping, priceTotal);

    // 3. Call PayPal to set up a transaction
    let request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
      intent: "CAPTURE",
      application_context: {
        return_url: `${client_path}/success`,
        cancel_url: "https://example.com",
        brand_name: "Vewe Jewlery",
        landing_page: "BILLING",
        user_action: "CONTINUE",
      },
      purchase_units: [
        {
          reference_id: "PUHF",
          description: "payment for Vewe Jewlery",
          soft_descriptor: "Jewlery Fashion",
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
          shipping: {
            method: "United States Postal Service",
            address: {
              name: {
                full_name: "John",
                surname: "Doe",
              },
              address_line_1: "123 Townsend St",
              address_line_2: "Floor 6",
              admin_area_2: "San Francisco",
              admin_area_1: "CA",
              postal_code: "94107",
              country_code: "US",
            },
          },
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

  // const orderID = await orders.findById(req.params.id);
});

app.post("/api/paypal-transaction-complete", async (req, res) => {
  const orderID = req.body.orderID;
  const request = new paypal.orders.OrdersCaptureRequest(orderID);
  request.requestBody({});
  try {
    const capture = await client.execute(request);
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

// nyakik: meret szin
// gyuruk meret szin
// fulik anyag szin
// de ezt igy eleg nehez
// mert kesobb aranybol is szeretnek csinani ezt azt
// es akkor a nyakinak nincs valasztasi lehetoseg

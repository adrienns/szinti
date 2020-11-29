import nodemailer from "nodemailer";
import auth from "./mailgun-auth.js";
import mailGun from "nodemailer-mailgun-transport";
import express from "express";
import data from "./data.js";
import cors from "cors";
import paypal from "paypal-rest-sdk";
import updateWithShippingCost from "./CalculateWithShippingCost.js";
import getItemDetails from "./Items.js";

//paypal integration

paypal.configure({
  mode: "sandbox", //sandbox or live
  // client_id: process.env.PAYPAL_CLIENT_ID,
  client_id:
    "Aaw6AON0AFfJ_T-Mzq06vZTF9j5eYJ0j7CBd1mO9glFHduMIVLVKyUkVb9T8MqyKz9pS1U5zGwTADJf_",
  client_secret:
    "EBSxkhJmuCUt1vjPz1pRQFQO2lSm7l4f2jMlODbfEoR0W6V7UruTCA-vgJRPMib5lUNxmYGNgbfv_Und",
});

const app = express();
const port = process.env.PORT || 8080;

const server_path = `http://localhost:${port}`;
const client_path = "http://localhost:1234";

// sending product data to frontend
app.use("/static", express.static("src/server/images"));
app.use(cors());

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

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

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

//receive data for total sum

app.post("/api/payment", (req, res) => {
  const cartData = req.body;
  const finalSum = JSON.stringify(updateWithShippingCost(cartData));
  const items = getItemDetails(cartData);

  const create_payment_json = JSON.stringify({
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: `${client_path}/success`,
      cancel_url: `${client_path}/cancel`,
    },
    transactions: [
      {
        item_list: {
          items: items,
          shipping_address: {
            recipient_name: "Kozma Palacsinta",
            line1: "Nyiregyhaza",
            city: "Mamamia",
            country_code: "US",
            postal_code: "95070",
            state: "CA",
          },
        },

        amount: {
          total: finalSum,
          currency: "HUF",
          // details: {
          //   subtotal: "30.00",
          //   shipping: "1.00",
          // }, =>not working
        },

        description: "This is the payment transaction description.",
      },
    ],
  });

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      throw error;
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === "approval_url") {
          res.json({ forwardLink: payment.links[i].href });
        }
      }
    }
  });
});

app.get("/success", (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;
  const execute_payment_json = {
    payer_id: payerId,
    transactions: [
      {
        amount: {
          currency: "HUF",
          total: "1",
        },
      },
    ],
  };
  paypal.payment.execute(paymentId, execute_payment_json, function (
    error,
    payment
  ) {
    if (error) {
      console.log(error.response);
      throw error;
    } else {
      console.log(JSON.stringify(payment));
      res.send("Success");
    }
  });
});

app.get("./cancel", () => res.send("Cancelled"));

// nyakik: meret szin
// gyuruk meret szin
// fulik anyag szin
// de ezt igy eleg nehez
// mert kesobb aranybol is szeretnek csinani ezt azt
// es akkor a nyakinak nincs valasztasi lehetoseg

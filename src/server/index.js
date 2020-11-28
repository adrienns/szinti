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
  client_id: process.env.PAYPAL_CLIENT_ID,
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

app.get("/api/data", (req, res) => {
  res.send(data);
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
  const finalSum = updateWithShippingCost(cartData);
  const items = getItemDetails(cartData);
  const create_payment_json = {
    intent: "order",
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
        },
        amount: {
          currency: "HUF",
          total: finalSum,
        },
        description: "Payment for VeweJewelery.",
      },
    ],
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      throw error;
    } else {
      console.log("Create Payment Response");
      console.log(payment);
      res.send("");
    }
  });
});

//API FOR CLIENT

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

// nyakik: meret szin
// gyuruk meret szin
// fulik anyag szin
// de ezt igy eleg nehez
// mert kesobb aranybol is szeretnek csinani ezt azt
// es akkor a nyakinak nincs valasztasi lehetoseg

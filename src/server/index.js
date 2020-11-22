import nodemailer from "nodemailer";
import auth from "./mailgun-auth.js";
import mailGun from "nodemailer-mailgun-transport";
import express from "express";
import data from "./data.js";
import cors from "cors";
import paypal from "paypal-rest-sdk";

//paypal integration

const app = express();
const port = process.env.PORT || 8080;

// sending product data to frontend
app.use("/static", express.static("src/server/images"));
app.use(cors());

app.get("/api/necklaceProductList", (req, res) => {
  res.send(data.necklaceProductList);
});

app.get("/api/ringsProductList", (req, res) => {
  res.send(data.ringsProductList);
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(port, () => {
  console.log(`Server start at http://localhost:${port}`);
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

//API FOR CLIENT

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

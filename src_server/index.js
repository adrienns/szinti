const express = require("express");
const log = console.log;
const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
const cors = require("cors");
const path = require("path");
const auth = require("./mailgun-auth.js");

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

    // transporter.close();
  });
};

const app = express();
const PORT = 8080;

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:1234");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

app.post("/api/forma", (req, res) => {
  const { customername, email, message } = req.body;
  console.log("Data: ", req.body);
  subject = `A new email from ${customername}:${email}`;

  sendMail(email, customername, message, (err, data) => {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
    } else {
      res.json({ message: "Email sent" });
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.listen(PORT, () => {
  log("Server is starting on PORT,", 8080);
});

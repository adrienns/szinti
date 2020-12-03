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
    const finalSum = JSON.stringify(updateWithShippingCost(cartData));
    const billingAddress = GetShippingDetails(cartData);
    const items = getItemDetails(cartData);
    console.log(finalSum, billingAddress, items);

    // 3. Call PayPal to set up a transaction
    let request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
      intent: "CAPTURE",
      application_context: {
        return_url: "https://example.com",
        cancel_url: "https://example.com",
        brand_name: "EXAMPLE INC",
        locale: "en-US",
        landing_page: "BILLING",
        shipping_preference: "SET_PROVIDED_ADDRESS",
        user_action: "CONTINUE",
      },
      purchase_units: [
        {
          reference_id: "PUHF",
          description: "Sporting Goods",

          custom_id: "CUST-HighFashions",
          soft_descriptor: "HighFashions",
          amount: {
            currency_code: "USD",
            value: "230.00",
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: "180.00",
              },
              shipping: {
                currency_code: "USD",
                value: "30.00",
              },
              handling: {
                currency_code: "USD",
                value: "10.00",
              },
              tax_total: {
                currency_code: "USD",
                value: "20.00",
              },
              shipping_discount: {
                currency_code: "USD",
                value: "10",
              },
            },
          },
          items: [
            {
              name: "T-Shirt",
              description: "Green XL",
              sku: "sku01",
              unit_amount: {
                currency_code: "USD",
                value: "90.00",
              },
              tax: {
                currency_code: "USD",
                value: "10.00",
              },
              quantity: "1",
              category: "PHYSICAL_GOODS",
            },
            {
              name: "Shoes",
              description: "Running, Size 10.5",
              sku: "sku02",
              unit_amount: {
                currency_code: "USD",
                value: "45.00",
              },
              tax: {
                currency_code: "USD",
                value: "5.00",
              },
              quantity: "2",
              category: "PHYSICAL_GOODS",
            },
          ],
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

    let response = await client.execute(request);
    debugger;

    console.log(`Response: ${JSON.stringify(response)}`);
    // If call returns body in response, you can get the deserialized version from the result attribute of the response.
    const orderID = response.result.id;
    console.log(`Order: ${JSON.stringify(response.result)}`);
    const resJson = { orderID };
    res.json(resJson);
  } catch (err) {
    console.error(err);
  }

  // let order;
  // try {
  //   order = await client.execute(request);
  // } catch (err) {
  //   // 4. Handle any errors from the call
  //   console.error(err);
  //   return res.send(500);
  // }

  // 5. Return a successful response to the client with the order ID
  // let captureOrder = async function (orderID) {
  //   request = new paypal.orders.OrdersCaptureRequest(orderID);
  //   request.requestBody({});
  //   // Call API with your client and get a response for your call
  //   let response = await client.execute(request);
  //   console.log(`Response: ${JSON.stringify(response)}`);
  //   debugger;
  //   // If call returns body in response, you can get the deserialized version from the result attribute of the response.
  //   console.log(`Capture: ${JSON.stringify(response.result)}`);
  // };

  // const orderID = await orders.findById(req.params.id);

  // let capture = captureOrder();
});

//   const create_payment_json = JSON.stringify({
//     intent: "sale",
//     payer: {
//       payment_method: "paypal",
//     },
//     redirect_urls: {
//       return_url: `${client_path}/success`,
//       cancel_url: `${client_path}/cancel`,
//     },
//     transactions: [
//       {
//         item_list: {
//           items: items,
//         },

//         amount: {
//           total: finalSum,
//           currency: "HUF",
//           // details: {
//           //   subtotal: "30.00",
//           //   shipping: "1.00",
//           // }, =>not working
//         },

//         description: "This is the payment transaction description.",
//       },
//     ],
//   });

//   paypal.payment.create(create_payment_json, function (error, payment) {
//     if (error) {
//       throw error;
//     } else {
//       for (let i = 0; i < payment.links.length; i++) {
//         if (payment.links[i].rel === "approval_url") {
//           res.json({ forwardLink: payment.links[i].href });
//         }
//       }
//     }
//   });
// });

// app.get("/success", (req, res) => {
//   const payerId = req.query.PayerID;
//   const paymentId = req.query.paymentId;
//   const execute_payment_json = {
//     payer_id: payerId,
//     transactions: [
//       {
//         amount: {
//           currency: "HUF",
//           total: "1",
//         },
//       },
//     ],
//   };
//   paypal.payment.execute(paymentId, execute_payment_json, function (
//     error,
//     payment
//   ) {
//     if (error) {
//       console.log(error.response);
//       throw error;
//     } else {
//       console.log(JSON.stringify(payment));
//       res.send("Success");
//     }
//   });

// app.get("./cancel", () => res.send("Cancelled"));

// nyakik: meret szin
// gyuruk meret szin
// fulik anyag szin
// de ezt igy eleg nehez
// mert kesobb aranybol is szeretnek csinani ezt azt
// es akkor a nyakinak nincs valasztasi lehetoseg

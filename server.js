const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

if (process.env.NODE_ENV != "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.post("/payment", async (req, res) => {
  const body = {
    amount: req.body.amount,
    currency: "usd",
    payment_method_types: ["card"],
    payment_method: req.body.paymentMethod.id,
    confirm: true,
  };
  try {
    const paymentIntent = await stripe.paymentIntents.create(body);
    res.status(200).json(paymentIntent);
  } catch (error) {
    res.status(500).json(error);
  }
});
app.listen(port, (error) => {
  if (error) throw error;
  console.log("server running on port" + port);
});

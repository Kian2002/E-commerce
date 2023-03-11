const express = require("express");
const stripe = require("stripe")("sk_test_Hrs6SAopgFPF0bZXSN3f6ELN");

const URL = "http://localhost:5173";

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  const line_items = req.body.cart.map((item) => {
    return {
      price_data: {
        currency: "cad",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: 1,
    };
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    success_url: `${URL}/success`,
    cancel_url: `${URL}/cancel`,
  });

  res.send({ url: session.url });
});

module.exports = router;

import express from 'express'
import cors from 'cors'
import Stripe from 'stripe'

const app = express();

const stripe = new Stripe('sk_test_51NOvqGSAvExKFAjaTkSgqxNXs5WQ8TofJQrBOJIhdkFNDBKzqbWwMSYYzbsfP6ozzQ1n3sljsSbCVHYnMhcePzGz00PbYWzMiX');

app.use(cors());
app.use(express.json());

//http://localhost:1000/create-payment-intent
app.post("/create-payment-intent", async (req, res) => {
  console.log(req.body)
  const { totalAmount } = req.body; //100
  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalAmount *100, //100.00
    currency: "inr",
     automatic_payment_methods: {
      enabled: true,
    },
  });
  res.send({clientSecret: paymentIntent.client_secret});
});

//http://localhost:1000
app.get('/',(req,res)=>{
  res.send({msg:"Hello from server "})
})

let PORT = 1000
app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`));




import express from 'express'
import cors from 'cors'
import Stripe from 'stripe'
import nodemailer  from 'nodemailer'

const app = express();

const stripe = new Stripe('sk_test_51PhkLOFS0pGWFKNuC0q0GJ8CoSNcAxxkwr08B1wEPTiXOWHod3aaj460lW1n293NkFtDauG7sXX5duMin83hVZ5A008sqEP3Wu');

app.use(cors());
app.use(express.json());

//http://localhost:1000/create-payment-intent
app.post("/create-payment-intent", async (req, res) => {
  console.log(req.body)
  const { totalAmount } = req.body; //100
  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalAmount *100, //100.00
    currency: "usd",
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


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "harshita.logicrays@gmail.com",
    pass: "dtce tdtd nxyk pwox",
  },
});
app.post('/mail',async(req,res)=>{
  // console.log(req.body)
  const {status,email,name,amount,payment}=req.body
    const info = await transporter.sendMail({
      from: '"Admin" <harshita.logicrays@gmail.com>', 
      to: email,
      subject: `your order has been ${status}`, 
      text:  `Hello ${name}`, 
      html: `Hello ${name}<br/><b>Thank you for ordering from us </b><br> Amount = ${amount}<br/>
              Order Status : ${status}<br/>
              Payment:${payment}<br/>
              Thank You<br/>Admin `, 
    });
    res.send({msg:"Mail sent "})
})


let PORT = 1000
app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`));




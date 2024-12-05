const express = require("express");
const Moralis = require("moralis").default;
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 3001;
const axios = require('axios');


const { createProxyMiddleware } = require('http-proxy-middleware');


app.use(cors());
app.use(express.json());



app.use('/api', createProxyMiddleware({
  target: 'https://api.1inch.io/v6.0/137',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/',
  },
}));
app.get('/1inch-proxy',async(req,res)=>{

  try{

    const response=await axios.get(`https://api.1inch.io/v6.0/42161/approve/allowance`,{

      params:{

        tokenAddress:req.query.tokenAddress,
        walletAddress:req.query.walletAddress
      }



    })

    res.json(response.data)
  }

  

  catch(error){

    if (error.response) {
     
      res.status(error.response.status).json(error.response.data);
  } else if (error.request) {
     
      console.error("No response received:", error.request);
      res.status(500).json({ error: "No response from 1inch API" });
  } else {
     
      console.error("Error in setting up request:", error.message);
      res.status(500).json({ error: error.message });
  }


    
  }




})

app.get("/tokenPrice", async (req, res) => {

  const {query}=req;

  const responseOne=await Moralis.EvmApi.token.getTokenPrice({

    address:query.addressOne,





  })

  const responseTwo=await Moralis.EvmApi.token.getTokenPrice({

    address:query.addressTwo,

  })

  const usdPrices={

    tokenOne:responseOne.raw.usdPrice,
    tokenTwo:responseTwo.raw.usdPrice,
    ratio:responseOne.raw.usdPrice/responseTwo.raw.usdPrice


  }

  
  return res.status(200).json(usdPrices);
});

Moralis.start({
  apiKey: process.env.MORALIS_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls`);
  });
});

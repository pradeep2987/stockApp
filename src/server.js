const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World');
});
 
app.listen(5000);

console.log("app running at http://localhost:5000/");

const noOfSharesNow = 88;
const avgCostOfSharesNow = 6475.9;
const reqAvgCostOfTotalShares = 6000; 
const livePrice = 4797.7;


//const noOfSharesNeedToBuy= noOfSharesNow*(avgCostOfSharesNow-reqAvgCostOfTotalShares)/(reqAvgCostOfTotalShares-livePrice);
//console.log(noOfSharesNeedToBuy);
app.use(express.json());
app.post('/stocks', (req, resp) => {
    const noOfSharesNow = req.body.noOfSharesNow;
    const avgCostOfSharesNow = req.body.avgCostOfSharesNow;
    const reqAvgCostOfTotalShares = req.body.reqAvgCostOfTotalShares; 
    const livePrice = req.body.livePrice;
    const noOfSharesNeedToBuy = noOfSharesNow*(avgCostOfSharesNow-reqAvgCostOfTotalShares)/(reqAvgCostOfTotalShares-livePrice);
    let totalInvestmentNeeded = noOfSharesNeedToBuy*livePrice;  
    //resp.send('no.noOfSharesNeedToBuy);
    resp.json({ noOfSharesNeedToBuy: Math.round(noOfSharesNeedToBuy * 100) / 100,
                totalInvestmentNeeded: Math.round(totalInvestmentNeeded * 100) / 100
              });
});
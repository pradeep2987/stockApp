# stockApp
Find no. of Stock need to buy to average out on a certain avg. price.

   Example :- You have a xyz stock with 100 stocks at avg price of 80 Rs. per stock. Now there is decline in stock price and the live price is 30 Rs. per stock. You want to average out the stock by buying it in bulk now. You want to buy x number of stocks so that your avgerage price of each stock will become 50 Rs. per stock. So by using this app you can figure out the number of stocks you need to buy at today's price so that your average cost of stock will become 50 Rs. per stock. 

ScreenShot of the app         
https://user-images.githubusercontent.com/29567227/82836724-c00c8700-9ee4-11ea-92d6-0ad08381f80f.png

To run locally:
* Clone this repository

build react web ui app first using below commands:
```bash
stockApp$ cd frontend
stockApp/frontend$ npm install
```

react front-end application running at http://localhost:3000/

run back-end nodejs application as below.

build and run nodejs application:
```bash
stockApp/frontend$ cd ..
stockApp$ node src/server.js 
```
         
         
 You can now work on the fron-end react application that will connect to back-end nodejs application and will provide response to front-end app. Happy coding !! :)

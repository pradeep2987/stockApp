import React from "react";
import axios from "axios";


export default class Stocks extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state ={
        responseMessage: ""
      };
    }
  cl
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      var object = {};
      data.forEach(function(value, key){
          object[key] = value;
      });
      var json = JSON.stringify(object);
    const headers = {
      'Content-Type': 'application/json'
    };
    axios.post('/stocks', json, {
        headers: headers
      })
      .then( response => {
        console.log(response);
        this.setState({
          responseMessage: "You need to buy " + response.data.noOfSharesNeedToBuy + " more stocks to get avg. price of "+object.reqAvgCostOfTotalShares+ " Rs. per share. You would need to invest total " 
          + response.data.totalInvestmentNeeded + " Rs. more. Thanks!! for using this app."
        });
      });
    }
  
    render() {
      return (
        <div class="container">
        <br></br>
        <h2>Find no. of Stock need to buy to average out on a certain avg. price.</h2>
        <br></br><br></br>
        <form onSubmit={this.handleSubmit} class="form-horizontal">
        <div class="form-group row">
            <label htmlFor="username">Enter noOfSharesNow</label>
            <input id="noOfSharesNow" name="noOfSharesNow" type="text" />
           </div>
           <div class="form-group row col-xs-">
            <label htmlFor="email">Enter avgCostOfSharesNow</label>
            <input id="avgCostOfSharesNow" name="avgCostOfSharesNow" type="text" />
            </div>
            <div class="form-group row col-xs-2">
            <label htmlFor="birthdate">Enter required AvgCostOfTotalShares</label>
            <input id="reqAvgCostOfTotalShares" name="reqAvgCostOfTotalShares" type="text" />
            </div>
            <div class="form-group row col-xs-2">
            <label htmlFor="birthdate">Enter livePrice</label>
            <input id="livePrice" name="livePrice" type="text" />
            </div>
            <br></br>
            <button>Find</button>
            <br></br><br></br><br></br><br></br>
            <h1>{this.state.responseMessage}</h1>
        </form>
        </div>
      );
    }
  }




/*   <div class="container">
  <h2>Vertical (basic) form</h2>
  <form action="/action_page.php">
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd">
    </div>
    <div class="checkbox">
      <label><input type="checkbox" name="remember"> Remember me</label>
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
  </form>
</div> */
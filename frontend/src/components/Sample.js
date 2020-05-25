import React, { Component } from "react";
export default class Sample extends Component {
state = {
    a: 'Hello from Sample'
};
handleButtonClick = () => {
   console.log("Inside Button Click");
   // this.state.a = "You pressed Button";
   this.setState({
       a: "you clicked Button"
   });
};
render() {
   return (
      <div>
         <h1>{this.state.a}</h1>
         <button type="button" onClick={this.handleButtonClick} >Click Me</button>
      </div>
  );
 }
}


/* State Vs Props
Props are immutable i.e. once we set the props then it cannot be changed, while State is an observable object that is used to hold data that may change over time and also used to control the behavior after each and every change.
While Props are set by the parent component, State is generally updated by event handlers. */
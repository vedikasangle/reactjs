import React from "react";
import ReactDOM from "react-dom";

const fname = "Vedika";
const lname = "Sangle"
const number = "5";
ReactDOM.render(
  <div>
    <h1>Hello my name is {fname} {lname}!</h1>
    <h1>Hi {fname + " " + lname}</h1>
    <h1> Hello {`${fname} ${lname}`} </h1>
    <p>My lucky number is {number}</p>
    <p>My lucky number is {3 + 4}</p>
    <p>My lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);

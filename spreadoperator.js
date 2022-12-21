import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Banana", "Coconut", ...citrus];

console.log(fruits);

const fullName = {
  fname: "vedika",
  lname: "sangle"
};

const user = {
  ...fullName,
  id: 1,
  username: "sanglevedika"
};

console.log(user);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.


import React from "react";
import ReactDOM from "react-dom";

var yourname = "Vedika";
var currentyear = new Date().getFullYear();
//in new date(2022, 6, 1) -->we can insert our own date in this way

ReactDOM.render(
  <div>
    <p>
      Created by {yourname}
    </p>
    <p>
      Copyright {currentyear}
    </p>
  </div>,
  document.getElementById("root")
)


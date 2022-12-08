import React from "react";
import ReactDOM from "react-dom";
import pie, { doublePi, triplePi } from "./Math.js";
//to import everything at once
//import * as pi from "./math.js";
//<li>{pi.default}</li>
//<li>{pi.doublePi()}</li>
//<li>{pi.triplePi()}</li>
ReactDOM.render(
  <ul>
    <li>{pie}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);

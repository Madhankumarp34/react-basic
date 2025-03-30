import React from "react"
import ReactDOM from "react-dom/client"

const parent = React.createElement("div",{id:"parent"},[
  React.createElement("div", {id:"child"},[
    React.createElement("h1",{},"This is Madhan"),
    React.createElement("h1",{},"TCS"),
  ]),

  React.createElement("div", {id:"child2"},[
    React.createElement("h1",{},"This is Madhan1"),
    React.createElement("h1",{},"TCS1"),
  ]),
]);

console.log(parent);  //object
const root = ReactDOM.createRoot(document.createElement("root"))
root.render(parent);
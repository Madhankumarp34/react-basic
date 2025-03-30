import React from "react"
import ReactDOM from "react-dom/client"

const parent = React.createElement("h1",{id:"parent"},
  [React.createElement("h1",{id:"child"},
  
    [React.createElement("h3",{}, "Grand child is me"),
    React.createElement("h2",{}, "Grand child is me")]),
    React.createElement("h1",{},"Hello World")])



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
console.log(parent)
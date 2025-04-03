import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child", key: "child1" }, [
//     React.createElement("h1", { key: "h1-1" }, "This is Madhan"),
//     React.createElement("h1", { key: "h1-2" }, "TCS"),
//   ]),

//   React.createElement("div", { id: "child2", key: "child2" }, [
//     React.createElement("h1", { key: "h1-3" }, "This is Madhan1"),
//     React.createElement("h1", { key: "h1-4" }, "TCS1"),
//   ]),
// ]);

// console.log(parent); //object

const InjectComponent = () =>(
  <p>Hi This is Madhan Kumar</p>
)
  


const Headingcomponent = () => (
  <div id="one" className="Hello">  
    <h1>Hello World</h1>
  <InjectComponent/> 
  <InjectComponent></InjectComponent>
  {
    InjectComponent()
  }
 </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcomponent />);

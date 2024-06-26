import React, { useState } from "react";
import ReactDom from "react-dom/client";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
 

const Greeting = () =>{
  const [count, setCount] = useState(0);    //react variable for changing state //unable to use var // useState(0) is initial value
  const plusOne = () =>{                    //this is number changing func
    setCount(count+1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={plusOne}>Plus One</button>
    </>
  )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Greeting/>);

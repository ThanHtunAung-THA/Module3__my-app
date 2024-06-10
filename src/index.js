import React from "react";
import ReactDom from "react-dom/client";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
 

const Greeting = () =>{
  return (
    // <div>
    //     <h1>Hello world</h1>
    //     <p>world hello</p>
    // </div>
    <>
    {/* <h1 className="h1-color">Hello world</h1>
    <p style={{margin:"20px"}}>world hello</p>
    <img src="logo192.png" />
    <button className="btn btn-success">Buy</button> */}

    <br></br>
    <h1 className="h1-color">Food list</h1>

    <div className="container mt-3">
      <div className="row">
        <div className="col-4">
          <Product title="Grilled Salmon"
          desc="10% discount"
          price="28000 ks" 
          img="food1.png"/>
        </div>
        <div className="col-4">
          <Product title="Vege-lover meal"
          desc="10% discount"
          price="7800 ks" 
          img="food2.png"/>
        </div>
        <div className="col-4">
          <Product title="Burger"
          desc="10% discount"
          price="8000 ks"
          img="food3.png"/>
        </div>
        <div className="col-4">
          <Product title="something"
          desc="10% discount"
          price="20000 ks"
          img="food4.png"/>
        </div>
      </div>
    </div>

    {/* <Product2/>
    <Product3/> */}

    </>
  )
}

const Product = (props)=> {
  return (
    <>
    <div className="card">
      <center>
      <img src={props.img} onDoubleClick={title==="Burger" ? imgMouse3: undefined}
      className="mt-3" 
      style={{borderRadius:"20px"}}
      width="200px" 
      height="auto" /><br></br>

      <h1 className="" onMouseOut={imgMouse2}>
        {props.title}
      </h1>

      <p style={{margin:"20px"}} onMouseOver={imgMouse} >
        description : {props.desc}
      </p>

      <p style={{margin:"20px"}}>
        price : {props.price}
      </p>

      <button className="btn btn-success" 
      onClick={()=>buyClick(props.title,props.price) }>
        Buy
      </button>
      </center>
    </div>
    </>

  )
}

const buyClick = (title,price)=> {
  if (title=="Beef burger") {
    alert("you bought "+ title +". Price is free");
  } else {
    alert("you bought "+ title +". Price is "+ price);
  }
}

const imgMouse = ()=> {
  alert("Mouse over");
}

const imgMouse2 = ()=> {
  alert("Mouse out");
}

const imgMouse3 = ()=> {
  alert("Mouse double clicked");
}


// const Product2 = ()=> {
//   return (
//     <>
//       <div className="card">
//         <h1 className="">Food2</h1>
//         <img src="food2.png" className="product-images" />
//         <p style={{margin:"20px"}}>this is food2.</p>
//         <button className="btn btn-success">Buy</button>
//       </div>
//     </>

//   )
// }

// const Product3 = ()=> {
//   return (
//     <>
//     <div className="card">
//       <h1 className="">Food3</h1>
//       <img src="food3.png" className="product-images" />
//       <p style={{margin:"20px"}}>this is food3.</p>
//       <button className="btn btn-success">Buy</button>
//     </div>
//     </>

//   )
// }

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Greeting/>);
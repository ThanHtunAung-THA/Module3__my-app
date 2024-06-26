import React from "react";
import ReactDom from "react-dom/client";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
 

const Greeting = () =>{

  const productData = [
    {
      id:1,
      title:"Grilled Salmon",
      price: "28000 ks",
      pic: "food1.png",
      desc: "10% discount",
    },
    {
      id:2,
      title:"Vege-lover meal",
      price: "7800 ks",
      pic: "food2.png",
      desc: "10% discount",
    },
    {
      id:3,
      title:"Burger",
      price: "8000 ks",
      pic: "food3.png",
      desc: "10% discount",
    },
    {
      id:4,
      title:"something",
      price: "20000 ks",
      pic: "food4.png",
      desc: "10% discount",
    },
  ];



  return (
    <>
      <br></br>
      <h1 className="h1-color">Food list</h1>

      <div className="container mt-3">
        <div className="row">

          {
            productData.map((data) =>{
              return (
                <div className="col-4" key="{data.id}">
                <Product title = {data.title}
                desc = {data.desc}
                price = {data.price} 
                img = {data.pic} />
              </div>
              )
            })
          }

          {/* <div className="col-4">
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
          </div> */}


        </div>
      </div>

    </>
  )
};

// ============================ product funcs ===============================

const Product = (props)=> {
  return (
    <>
    <div className="card">
      <center>
      <img src={props.img} 
      className="mt-3" 
      style={{borderRadius:"20px"}}
      width="200px" 
      height="auto" 

      // onDoubleClick={props.img=="food3.png" ? imgMouse3 : undefined }
      
      onDoubleClick={ props.img=="food3.png" ? ()=>RedBtn(props.img) : undefined }
      // onDoubleClick={ props.img=="food3.png" ? ()=>document.getElementById(props.img).style.backgroundColor = 'red' : undefined }

      // onDoubleClick={props.img=="food3.png" ? (imgMouse3, ()=>RedBtn(props.img)) : undefined }

      /><br></br>

      <h1 className="" 
      onMouseOver={imgMouse}
      >
        {props.title}
      </h1>

      <p style={{margin:"20px"}} 
      onMouseOut={imgMouse2}
      >
        description : {props.desc}
      </p>

      <p style={{margin:"20px"}}
      onDoubleClick={props.img=="food3.png" ? imgMouse3 : undefined}
      >
        price : {props.price}
      </p>

      <button className="btn btn-success"
      style={{marginBottom:"5px"}}
      id={props.img}
      onClick={()=>buyClick(props.title, props.price) }
      >
        Buy
      </button>

{/* btn condition type2 */}
      {/* {props.title == "Burger" &&
        <button className="btn btn-danger mb-3">
          onClick={()=>buyClick(props.title, props.price) }

        </button>
      }
      {props.title != "Burger" &&
        <button className="btn btn-danger mb-3">
          onClick={()=>buyClick(props.title, props.price) }
          
        </button>
      } */}

      </center>
    </div>
    </>

  )
};


// ============================ Secondary funcs ===============================

const buyClick = (title,price) => {
  if (title=="Burger") {
    alert("you bought "+ title +". Price is free");
  } else {
    alert("you bought "+ title +". Price is "+ price);
  }
};

const imgMouse = () => {
  alert("Mouse over on h1 tag !!!");
};

const imgMouse2 = () => {
  alert("Mouse out from p tag-description !!!");
};

const imgMouse3 = () => {
  alert("Mouse double clicked on p tag-price of Burger !!!");
};

const RedBtn = (id) => {
  document.getElementById(id).style.backgroundColor = 'red';
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Greeting/>);

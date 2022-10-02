// import style from "./full.module.css"

// import data from "./allData.json"
// import { useParams } from "react-router-dom";

// function Full(){
//     const params= useParams() ;
//     let obj = data.filter((items) => items.id === params.id);
//     console.log(obj)
    
    
   
//     return <>
//     <h1>user details .......................... </h1>

    
    
//    {/* <div className={style.container}>
//     <div className={style.firstDiv}>
//         <div><img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101101-1_1.jpg?v=1659450051" alt="" /></div>
//         <div className={style.twoImage}>
//             <div><img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101101-3_1.jpg?v=1659450054" alt="" /></div>
//             <div><img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101101-2_1.jpg?v=1659450054" alt="" /></div>
//         </div>
//     </div>
//     <div>
//         <p className={style.lovoda10px}>LOVODA</p>
//         <h1 className={style.nameOfProducts}>Blossom Ear Cuff Earrings</h1>
//     </div> */}
//    {/* </div> */}
//     </>
// }
// export default Full ;
import React, { useState } from "react";
import style from "./full.module.css";
import data from "./allData.json";
import { useParams } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";
import { RiWechatLine } from "react-icons/ri";
import {BsSuitHeart} from "react-icons/bs"
import { NavLink } from "react-router-dom";

const Full = () => {
  const params = useParams();
  
 console.log(params)
  
  const [count, setCount] = useState(1);
  const [switchImg, setSwitchImg] = useState(false);
    
  let obj = data.filter((item) => item.id === params.user_id);
  
  return (<>
    
    <div style={{ marginBottom: "50px" }}>
      {obj.map((item) => (
        <div
          style={{ textAlign: "left", fontWeight: "400", fontSize: "13px" }}
          className={style.wrapper}
        >
             <div className={style.firstDiv}>
        <div><img src={item.img1} alt="" /></div>
        <div className={style.twoImage}>
            <div><img src={item.img2} alt="" /></div>
            <div><img src={item.img1} alt="" /></div>
         </div>
    </div>
          
          <div className={style.right}>
          <p className={style.lovoda10px}>LOVODA</p>
            <h1>{item.name}</h1>
            <div className={style.icon}>
              <Icon w={5} h={5} color="#c9ac92" as={AiOutlineStar} />
              <Icon w={5} h={5} color="#c9ac92" as={AiOutlineStar} />
              <Icon w={5} h={5} color="#c9ac92" as={AiOutlineStar} />
              <Icon w={5} h={5} color="#c9ac92" as={AiOutlineStar} />
              <Icon w={5} h={5} color="#c9ac92" as={AiOutlineStar} />
              <p
                style={{
                  marginTop: "-2px",
                  marginLeft: "3px",
                  fontSize: "16px",
                }}
              >
                write a review
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContext: "flexStart",
                marginTop: "5px",
              }}
            >
              | <Icon w={6} h={6} ml={3} mr={3} as={RiWechatLine}></Icon> Ask a
              question
            </div>
            <div
              style={{
                textAlign: "left",
                fontSize: "20px",
                fontWeight: "400",
                marginTop: "20px",
              }}
            >
              $ {item.price}
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  backgroundColor: "rgb(178, 252, 228)",
                  borderRadius: "200px",
                  color: "black",
                  width: "100px",
                  marginTop: "20px",
                  height: "25px",
                  paddingLeft: "27px",
                  paddingTop: "3px",
                }}
              >
                <p className={style.afterpay}>afterpay</p>
              </div>
              <span
                style={{
                    display:"block" ,
                  marginTop: "20px",
                  paddingLeft: "5px",
                  textAlign: "left",
                }}
              >
                available for orders between $35 to $1000
                <p className={style.shippingC} ><span> Shipping </span> calculated at checkout.</p>
              </span>
             <div> </div>
            </div>
            <div style={{ textAlign: "left", marginTop: "15px" }}>
              Pay in 4 iterest-free installments for orders over $50 with
              ShopPay <span style={{cursor:"pointer",textDecoration:"underline"}}>Learn more</span>
            </div>
            <div style={{ marginTop: "20px" }}>Quantity</div>
            <button
              style={{
                width:"70px" ,
                height:"40px" ,
                display: "flex",
                border: "1px solid black",
                marginTop: "10px",
                padding: "5px 10px 5px 10px",
                width: "100px",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <button
                style={{ cursor: "pointer" ,
                border: "none"}}
               
                onClick={() => setCount(count - 1)}
                disabled={count === 1}
              >
                -
              </button>
              <div>{count}</div>
              <button
                style={{ cursor: "pointer",border: "none" }}
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </button>
            <button   className={style.buyBtn} style={{ padding: "15px 25px", margin: "5px" }}>
              Add to Cart
            </button>
            <button   className={style.buyBtn} style={{ padding: "15px 25px", margin: "5px" }}>
         Add to Wishlist (1)
            </button>
            <NavLink to="/buy">
            <button
          
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "15px 25px",
                margin: "5px",
                backgroundColor:"#5A31F4"
                
              }}
            >
              Buy it now
            </button></NavLink>
          </div>
        </div>
      ))}
      
    </div> 
    </>
  );
};

export default Full;

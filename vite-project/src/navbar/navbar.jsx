import React from "react";
import style from "./navbar.module.css"
import { NavLink } from "react-router-dom";

import {AiOutlineSearch } from 'react-icons/ai';
import {HiOutlineUser,HiShoppingBag } from 'react-icons/hi';


function Navbar(){
    const links = [
        { path: "/", title: "Home" },
         { path: "/new", title: "New" },
        { path: "/shopAll", title: "Shop All" },
        { path: "/earrings", title: "Earrings" } ,
        { path: "/necklaces", title: "Necklaces" } ,
        { path: "/bracelets", title: "Bracelets" } ,
        { path: "/rings", title: "Rings" } ,
        { path: "/shopSocial", title: "Shop Social" } ,
      ];
    return <>
    <div className={style.navbar}>
    <div className={style.freeOrdersShip}><p>Free Shipping on Orders Over $75 and Free Returns (US ONLY)</p></div>
   <div className={style.LRC}>
    <div className={style.smallLRC}>
     
    <div><NavLink to="/"><img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/04122019_logo2_90x.png?v=1645644264" alt="" /> </NavLink></div>
    <div>
    {links.map((link) => (
        <NavLink
         
          className={({ isActive }) =>
            isActive ? style.active : style.default
          }
          key={link.path}
          to={link.path}
          end
        >
          {link.title}
        </NavLink>
        
      ))}
    </div>
    <div>
  
 
    <h1> <AiOutlineSearch  size="23px"    color="rgba(18, 18, 18, 0.75)"/> </h1>
    <NavLink to ="/login"><h1> <HiOutlineUser size="23px"    color="rgba(18, 18, 18, 0.75)"/> </h1></NavLink>
    <h1> <HiShoppingBag size="23px"    color="rgba(18, 18, 18, 0.75)"/> </h1>
    
    </div>
    </div>
   </div>
   </div>
    </>
}
export default Navbar
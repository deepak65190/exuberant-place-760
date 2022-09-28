import React from "react"
import style from "./footer.module.css"
import { Input } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer(){
    return <>
    <h1>hooter</h1>
    <div className={style.back}>
    <div className={style.footer}>
       <div>
        <ul className={style.str}>
            <h1 className={style.info}>info</h1>
            <li>Search</li>
            <li>Terms of Service</li>
            <li>Refund policy
</li>
            <li>Wholesale</li>
            <li>Wholesale Signup Form</li>
            <li>Shipping</li>
            <h1 className={style.subscribe}>Subscribe to our emails</h1>
            <li><Input placeholder='Email' width="300px" type="email" /></li>
        </ul>
       </div>
       <div>
        <ul className={style.str}>
        <h1 className={style.info}>Contact us !</h1>
            <li>Need to talk? Reach us via email, phone or text!</li>
            <li><h1 className={style.info}>Email: Customerservice@Lovoda.com</h1></li>
            <li className={style.info}>Phone: (443) 500-1200</li>
            <li>**Msg &data rates may apply</li>
            <li><span></span>
            <span></span>
            </li>
        </ul>
       </div>
      

    </div>
    </div>
    <div className={style.payML}>
    <FontAwesomeIcon icon="fa-brands fa-pinterest" />
    <FontAwesomeIcon icon="fa-brands fa-twitter" />
    <FontAwesomeIcon icon="fa-brands fa-instagram" />
    <img style={{width:"100px"}} src="https://www.bandt.com.au/information/uploads/2020/08/Afterpay_AppIcon_BlackonMint-1260x840.jpg" alt="" />
    </div>
    </>
}
export default Footer
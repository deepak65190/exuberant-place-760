import React from "react"
import style from "./footer.module.css"
import { Input ,Flex ,Icon } from '@chakra-ui/react'
import { BiCopyright } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

function Footer(){
    return <>
  
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
            
        </ul>
       </div>
       <Flex className={style.socialIcons}>
            <Icon
              className={style.itfp}
              color="rgba(18, 18, 18)"
              as={AiFillFacebook}
              h={5}
              w={5}
            />
            <Icon
              className={style.itfp}
              color="rgba(18, 18, 18)"
              as={BsPinterest}
              h={5}
              w={5}
            />
            <Icon
              className={style.itfp}
              color="rgba(18, 18, 18)"
              as={AiOutlineInstagram}
              h={5}
              w={5}
            />
            <Icon
              className={style.itfp}
              mb="0px"
              ml="0px"
              color="rgba(18, 18, 18)"
              as={FaTiktok}
              h={5}
              w={5}
            />
          </Flex>

    </div>
    </div>
   
   
    <div className={style.wrapper}>
      <Flex>
        <img
          className={style.paymentCard}
          src="https://enchanting-faloodeh-23d430.netlify.app/1pay.png"
          alt="image"
        />
      </Flex>
      <div className={style.icon}>
        <Icon color="rgba(18, 18, 18)" as={BiCopyright} h={2} w={2} /> 2022,
        Lovoda Powered by Shopify
      </div>
    </div>
    </>
}
export default Footer
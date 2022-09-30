import React from "react"
import style from "./login.module.css"
import { Input, Stack, Button } from '@chakra-ui/react'
import {NavLink,Link} from "react-router-dom"
function ToastExample() {
    return (
      <button
        style={{
          padding: "10px",
          backgroundColor: "black",
          color: "white",
          width: "100px",
          fontWeight: "500",
          marginTop: "30px",
          marginBottom: "150px",
          marginLeft: "150PX"
        }}
      
      >
        Sign in
      </button>
    );
  }
const Login = () => {
    return <>
        <h3 className={style.loginh1}>Login</h3>
        <div className={style.login} >
            <div className={style.flogo}>
                <div> <img className={style.fimg} src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="" /></div>
                <div><p className={style.continueWF}>Continue with Facebook</p></div>


            </div>
            <div className={style.glogo}>
                <div> <img className={style.gimg} src="https://w7.pngwing.com/pngs/628/58/png-transparent-google-logo-google-search-google-now-google-text-trademark-service.png" alt="" /></div>
                <div><p className={style.google}>Google</p></div>


            </div>
            <div className={style.alogo}>
                <div> <img className={style.aimg} src="https://pngimg.com/uploads/amazon/amazon_PNG22.png" alt="" /></div>
                <div><p className={style.amazon}>Amazon</p></div>


            </div>
            <div >
                <Stack spacing={3}>

                    <Input type="email" border="1px solid black" placeholder='Email' size='lg' />
                    <Input type="password" placeholder='Password' size='lg' />

                </Stack>
                <p className={style.forgogtP}>Forgot your password?</p>
               <NavLink to ="/"><ToastExample/></NavLink>
               <div
          style={{
            marginTop: "-120px",
            marginBottom: "100px",
            textDecoration: "underline",
            marginLeft: "150px" ,
            fontSize: "13px"
          }}
        >
          <NavLink to="/account/register">
            <Link>Create Account</Link>
          </NavLink>
        </div>
            </div>

          

        </div>



    </>
}
export default Login

import React from "react"
import style from "./login.module.css"
import { Input, Stack, Button } from '@chakra-ui/react'
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

                    <Input border="1px solid black" placeholder='Emil' size='lg' />
                    <Input placeholder='Password' size='lg' />

                </Stack>
                <p className={style.forgogtP}>Forgot your password?</p>
                <Button colorScheme='black'>Sin in</Button>
            </div>

           

        </div>



    </>
}
export default Login
{/* <div className={style.fLogo}>


</div>
<div className={style.fgaLogo}><img src="" alt="" />
<p>Google</p>
</div>
<div className={style.fgaLogo}><img src="" alt="" />
<p>Amazon</p> */}
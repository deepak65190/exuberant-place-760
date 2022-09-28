import React from "react"
import style from "./login.module.css"
import { Box ,Stack} from '@chakra-ui/react'
const Login=()=>{
    return <>
    <div className={style.login} >
        <div className={style.fgaLogo}><img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="" />
        <p>Continue with Facebook</p></div>
        <div className={style.fgaLogo}><img src="https://w7.pngwing.com/pngs/628/58/png-transparent-google-logo-google-search-google-now-google-text-trademark-service.png" alt="" />
        <p>Google</p>
        </div>
        <div className={style.fgaLogo}><img src="https://pngimg.com/uploads/amazon/amazon_PNG22.png" alt="" />
        <p>Amazon</p>
        </div>
  
    </div>
    
    </>
}
export default Login
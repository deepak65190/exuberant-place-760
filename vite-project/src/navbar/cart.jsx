import {NavLink} from "react-router-dom"
import style from "./cart.module.css"
function Cart(){
    return <>
    <div className={style.cart}>
        <h1>Your cart is empty</h1>
        <div>Continue Shoping</div>
        <h2>Have an account?</h2>
        <p> <NavLink to="/login"> <span style={{textDecoration:"underline"}}>Log in</span> </NavLink> to check out faster</p>
    </div>
    </>
}
export default Cart
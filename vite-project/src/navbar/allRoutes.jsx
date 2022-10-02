import React  from "react";
import {Routes,Route} from "react-router-dom"
import Home from "./home";
import Bracelets from "./bracelets";
import Earrings from "./earrings";
import Necklaces from "./necklaces";
import ImageNew from "./new";
import Rings from "./rings";
import ShopAll from "./shopAll";
import ShopSocial from "./shopSocial";
import Login from "../userDetails/Login";
import Full from "../fullInfor/full"; 
import Cart from "./cart";
import Buy from "./buy";
import Register from "../userDetails/register"
function AllRoutes(){
    return <>
<Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/:user_id" element={<Full/>}></Route>
    <Route path="/new" element={<ImageNew/>}></Route>
    <Route path="/new/:n_id" element={<Full/>}></Route>
    <Route path="/shopAll" element={<ShopAll/>}></Route>
    <Route path="/earrings" element={<Earrings/>}></Route>
    <Route path="/necklaces" element={<Necklaces/>}></Route>
    <Route path="/bracelets" element={<Bracelets/>}></Route>
    <Route path="/rings" element={<Rings/>}></Route>
    <Route path="/shopSocial" element={<ShopSocial/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/buy" element={<Buy/>}></Route>
    <Route path="/resist" element={<Register/>}></Route>

</Routes>
    </>
}
export default AllRoutes
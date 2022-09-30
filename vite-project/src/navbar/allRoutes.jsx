import React  from "react";
import {Routes,Route} from "react-router-dom"
import Home from "./home";
import Bracelets from "./bracelets";
import Earrings from "./earrings";
import Necklaces from "./necklaces";
import New from "./new";
import Rings from "./rings";
import ShopAll from "./shopAll";
import ShopSocial from "./shopSocial";
import Login from "../userDetails/Login";
import Full from "../fullInfor/full";

function AllRoutes(){
    return <>
<Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/:user_id" element={<Full/>}></Route>
    <Route path="/new" element={<New/>}></Route>
    <Route path="/shopAll" element={<ShopAll/>}></Route>
    <Route path="/earrings" element={<Earrings/>}></Route>
    <Route path="/necklaces" element={<Necklaces/>}></Route>
    <Route path="/bracelets" element={<Bracelets/>}></Route>
    <Route path="/rings" element={<Rings/>}></Route>
    <Route path="/shopSocial" element={<ShopSocial/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
</Routes>
    </>
}
export default AllRoutes
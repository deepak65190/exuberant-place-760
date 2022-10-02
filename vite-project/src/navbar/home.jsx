import React from "react";
import {Link, NavLink} from "react-router-dom"
import {Box} from "@chakra-ui/react"
import style from "./home.module.css"
import data from "../allImages/homeI.json"
import ChangeOnHover from "../allImages/changeOnHover"

function Home(){
    return <>
    <div>
    <Box>
        <div className={style.banner}>
          <h1>NEW NEW NEW</h1>
          <h2>Check out the new beauties!</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <NavLink to="/shopAll">
              <button className={style.btn}>Shop All</button>
            </NavLink>
          </div>
        </div>
      </Box>
      {/* products grid */}
      
      <Box className={style.grid}>
        {data.map((items) => (
          <ChangeOnHover key={items.id} {...items} />
        ))}
      </Box>
     
    </div>
    </>
}
export default Home

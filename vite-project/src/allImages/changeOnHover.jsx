import style from "./ChangeOnHover.module.css";
import { Icon} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import {Link} from "react-router-dom"

const  ChangeOnHover = (items) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <Link to = {`/${items.id}`}>
      <div key={items.id} className={style.wrapper}>
        <figure className={style.figure}>
          <div className={style.hoverAnimation}>
            <img src={items.img2} className={style.imgBack} alt="img1" />
            <img src={items.img1} className={style.imgFront} alt="img2" />
          </div>
          <figcaption className={style.figcaption}>
          
            <Link className={style.link}>{items.name}</Link>
             <p className={style.itemPrice}>${items.price}</p>
          </figcaption>
        </figure>
      </div></Link>
      <div onClick={() => setToggle(!toggle)} className={style.wishBack}></div>
      {!toggle && (
        <Icon
          onClick={() => setToggle(!toggle)}
          className={style.emptyHeartAlone}
          color="#c9ac92"
          as={AiOutlineHeart}
          h={5}
          w={5}
        />
      )}
      {toggle && (
        <Icon
          onClick={() => setToggle(!toggle)}
          className={style.filledHeart}
          color="#c9ac92"
          as={AiFillHeart}
          h={5}
          w={5}
        />
      )}
    </div>
  );
};

export default ChangeOnHover;

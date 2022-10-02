import style from "./newImages.module.css" ;
import { Icon, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const NewImage = (item) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
         <Link to={`/new/${item.id}`}>
      <div key={item.id} className={style.wrapper}>
        <figure className={style.figure}>
          <div className={style.hoverAnimation}>
            <img src={item.img2} className={style.imgBack} alt="img1" />
            <img src={item.img1} className={style.imgFront} alt="img2" />
          </div>
          <figcaption className={style.figcaption}>
            <p className={style.link}>{item.name}</p>
            <p>${item.price}</p>
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

export default NewImage;

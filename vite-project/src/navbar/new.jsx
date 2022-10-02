import {
    Box,
    Checkbox,
    Flex,
    Icon,
    Input,
    Link,
    Menu,
    MenuButton,
    MenuDivider,
    MenuList,
    Select,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import styles from "./new.module.css";
  import { AiOutlineDown } from "react-icons/ai";
  import { AiOutlineHeart } from "react-icons/ai";
  import { BsCurrencyDollar } from "react-icons/bs";
  import data from "./NewData.json";
 import NewImage from "../newImages/newImage";
  import { NavLink } from "react-router-dom";
//   import { Wishlist } from "../../ReusableComponents/WishlistTag";
  
  const ImageNew = () => {
    const [prodData, setProdData] = useState(data);
    const handleChange = (e) => {
      let val = e.target.value;
      if (val === "lth") {
        setProdData([...data.sort((a, b) => a.price - b.price)]);
      }
      if (val === "htl") {
        setProdData([...data.sort((a, b) => b.price - a.price)]);
      }
      if (val === "a2z") {
        setProdData([...data.sort((a, b) => a.id - b.id)]);
      }
      if (val === "z2a") {
        setProdData([...data.sort((a, b) => b.id - a.id)]);
      }
    };
    return (
      <div className={styles.wrapper}>
        <div className={styles.new}>New</div>
        <div className={styles.filter}>
          <div className={styles.align}>
            <p>Filter:</p>
            <Menu>
              <MenuButton as={Link}>
                Price{" "}
                <Icon
                  className={styles.icon}
                  color="rgba(18, 18, 18)"
                  as={AiOutlineDown}
                  h={3}
                  w={3}
                />
              </MenuButton>
              <MenuList>
                <Flex pt={2} pl={5} w={340}>
                  <div>The highest price is $95.00</div>
                  <div>
                    <Icon
                      className={styles.icon}
                      color="#c9ac92"
                      as={AiOutlineHeart}
                      ml={10}
                      mr={10}
                      mt={-1}
                      h={7}
                      w={7}
                    />
                  </div>
                  <div>
                    <Link>Reset</Link>
                  </div>
                </Flex>
                <MenuDivider />
                <Flex p={3}>
                  <Icon
                    className={styles.icon}
                    as={BsCurrencyDollar}
                    mt={2}
                    ml={2}
                    h={4}
                    w={4}
                  />
                  <Input ml={3} mr={10} w={120} />
                  <Icon
                    className={styles.icon}
                    as={BsCurrencyDollar}
                    mt={2}
                    h={4}
                    w={4}
                  />
                  <Input ml={3} mr={10} w={120} />
                </Flex>
              </MenuList>
            </Menu>
  
            {/* -------------------------------- */}
  
            <Menu>
              <MenuButton as={Link}>
                Availability{" "}
                <Icon
                  className={styles.icon}
                  color="rgba(18, 18, 18)"
                  as={AiOutlineDown}
                  h={3}
                  w={3}
                />
              </MenuButton>
              <MenuList>
                <Flex justifyContent="space-between" pt={2} pl={5} w={300} pr={0}>
                  <div>0 Selected</div>
                  <div>
                    <Link mr={5}>Reset</Link>
                  </div>
                </Flex>
                <MenuDivider />
                <Flex p={3}>
                  <Checkbox pr={2} />
                  In stock(324)
                </Flex>
                <Flex p={3}>
                  <Checkbox pr={2} />
                  Out of stock(2)
                </Flex>
              </MenuList>
            </Menu>
          </div>
          <div className={styles.align}>
            <p>Sort by:</p>
            <Select onChange={handleChange} mt={0} w={150} fontSize="14px">
              <option value="htl">Featured</option>
              <option value="lth">Best selling</option>
              <option value="a2z">Alphabetically, A-Z</option>
              <option value="z2a">Alphabetically, Z-A</option>
              <option value="lth">Price, low to high</option>
              <option value="htl">Price, high to low</option>
              <option selected value="a2z">
                Date, old to new
              </option>
              <option value="z2a">Date, new to old</option>
            </Select>
            <p>463 products</p>
          </div>
        </div>
  
        {/* -------------------- */}
  
        {/* <Box className={styles.grid}>
          {data.map((item) => (
            <newImage key={item.id} {...item} />
          ))}
        </Box> */}
        <Box className={styles.grid}>
          {data.map((item) => (
            
              
                <NewImage key={item.id} {...item} />
              
           
          ))}
        </Box>
        <Flex justifyContent="center">
          <Link p={5}>1</Link>
          <Link
            onClick={() =>
              setProdData([...data.sort((a, b) => a.price - b.price)])
            }
            p={5}
          >
            2
          </Link>
          <Link
            onClick={() =>
              setProdData([...data.sort((a, b) => b.price - a.price)])
            }
            p={5}
          >
            3
          </Link>
          <div style={{ marginTop: "20px", marginLeft: "5px" }}>...</div>
          <Link p={5}>23</Link>
        </Flex>
        {/* <Wishlist /> */}
      </div>
    );
  };
  
  export default ImageNew ;
  
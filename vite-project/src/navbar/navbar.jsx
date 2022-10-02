
import style from "./navbar.module.css"
import { NavLink,useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {AiOutlineSearch } from 'react-icons/ai';
import {HiOutlineUser,HiShoppingBag } from 'react-icons/hi';
import { BsBag } from "react-icons/bs";
import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

function Navbar(){
    const links = [
        { path: "/", title: "Home" },
         { path: "/new", title: "New" },
        { path: "/shopAll", title: "Shop All" },
        { path: "/earrings", title: "Earrings" } ,
        { path: "/necklaces", title: "Necklaces" } ,
        { path: "/bracelets", title: "Bracelets" } ,
        { path: "/rings", title: "Rings" } ,
        { path: "/shopSocial", title: "Shop Social" } ,
      ];
      function SearchDrawer() {
        const { isOpen, onOpen, onClose } = useDisclosure();
        const btnRef = React.useRef();
        const [query, setQuery] = useState("");
       
      function DrawerExample() {
          const { isOpen, onOpen, onClose } = useDisclosure()
          const btnRef = React.useRef()
        
          return (
            <>
              <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                serch logo
              </Button>
              <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Free Shipping on Orders Over $75 and Free Returns (US ONLY)</DrawerHeader>
        
                  <DrawerBody>
                    <Input placeholder='search' />
                  </DrawerBody>
        
                 
                </DrawerContent>
              </Drawer>
            </>
          )
        }
       
    
        return (
          <>
            
    
            <Icon
              onClick={onOpen}
              ref={btnRef}
              className={style.icon}
              mb="5px"
              ml="260px"
              color="rgba(18, 18, 18, 0.75)"
              as={AiOutlineSearch}
              h={5}
              w={5}
            />
            <Drawer
              isOpen={isOpen}
              placement="top"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent h="150px">
                <DrawerCloseButton border="none" mt="-2" />
                <Flex className={style.top}>
                  Free Shipping on Orders Over $75 and Free Returns (US ONLY)
                </Flex>
                <hr />
                <div
                  style={{ width: "500px", margin: "auto", height: "150px" }}
                  // display="flex"
                  // w="500px"
                  // m="auto"
                  // h="150px"
                  // border="1px solid white"
                >
                  <div
                    style={{
                      position: "relative",
                      width: "70%",
                      top: "35px",
                      margin: "auto",
                      border: "1px solid black",
                    }}
                  >
                    <Input
                      // m="auto"
                      // w="100%"
                      // mt="25px"
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search... "
                      borderRadius="0"
                      onKeyDownCapture={(e) => {
                        console.log(e, "btn");
                        if (e.key === "Enter") {
                          navigate(`/collections/${query}`);
                        }
                      }}
                    />
                  </div>
                  {/* <Button
                    disabled={!query}
                    w="20px"
                    variant="outline"
                    mt={7}
                    >
                  </Button> */}
                  <Icon
                    onClick={() => navigate(`/collections/${query}`)}
                    className={style.icon}
                    mb="5px"
                    ml="435px"
                    position="relative"
                    top="3px"
                    color="rgba(18, 18, 18, 0.75)"
                    as={AiOutlineSearch}
                    h={5}
                    w={5}
                  />
                </div>
              </DrawerContent>
            </Drawer>
          </>
        );
      }
    return <>
    <div className={style.navbar}>
    <div className={style.freeOrdersShip}><p>Free Shipping on Orders Over $75 and Free Returns (US ONLY)</p></div>
   <div className={style.LRC}>
    <div className={style.smallLRC}>
     
    <div><NavLink to="/"><img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/04122019_logo2_90x.png?v=1645644264" alt="" /> </NavLink></div>
    <div>
    {links.map((link) => (
        <NavLink
         
          className={({ isActive }) =>
            isActive ? style.active : style.default
          }
          key={link.path}
          to={link.path}
          end
        >
          {link.title}
        </NavLink>
        
      ))}
    </div>
    <div>
  
    <SearchDrawer/>
    
    <NavLink to ="/login"><h1> <HiOutlineUser size="23px"    color="rgba(18, 18, 18, 0.75)"/> </h1></NavLink>
   <NavLink to= "/cart"> <h1> <BsBag size="23px"    color="rgba(18, 18, 18, 0.75)"/> </h1></NavLink>
    
    </div>
    </div>
   </div>
   </div>
    </>
}
export default Navbar
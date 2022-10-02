import { Image, Input, useToast } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import styles from "./LoginRegister.module.css";

const Register = () => {
  const navigate = useNavigate();

  const { details, users, setUsers, handleChange } = useContext(AuthContext);

  const { firstName, lastName, email, password } = details;

  const [userExist, setUserExist] = useState(false);

  const toast = useToast();
  function ToastExample() {
    return (
      <button
        style={{
          padding: "10px",
          backgroundColor: "black",
          color: "white",
          width: "100px",
          fontWeight: "500",
          marginTop: "30px",
          marginBottom: "150px",
        }}
        onClick={submitForm}
      >
        Create
      </button>
    );
  }
  const submitForm = () => {
    if (details.password !== "") {
      users.forEach((item) => {
        if (item.email === details.email) {
          setUserExist(!userExist);
        }
      });
      if (userExist) {
        toast({
          title: "User already exist",
          description: "This email id is already exist on the server",
          status: "warning",
          duration: 9000,
          isClosable: true,
        });
      } else if (!userExist) {
        setUsers([...users, details]);
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/account/login");
      }
    } else {
      toast({
        title: "Please enter credentials",
        description: "We cannot create your account with proper credentials",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    console.log(users, "up");
  }, [users]);

  return (
    <div
      style={{
        width: "448px",
        margin: "auto",
        fontSize: "14px",
        fontWeight: "400",
      }}
    >
      <div
        style={{
          marginTop: "50px",
          fontSize: "40px",
          letterSpacing: "0.6px",
          fontWeight: "400",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        Register
      </div>
      <button
        style={{
          paddingLeft: "-50px",
          borderRadius: "0px",
          backgroundColor: "transparent",
          border: "2px solid #1771e6",
          height: "50px",
        }}
        // border="2px solid #1771e6"
        // borderRadius="0px"
        // backgroundColor="transparent"
        // mb={2}
        // color="#1771e6"
      >
        <Image
          h={5}
          w={6}
          ml={90}
          mt={1}
          src="https://www.facebook.com/images/fb_icon_325x325.png"
          alt="fb logo"
        />
        <div
          style={{
            marginRight: "80px",
            marginTop: "-20px",
            marginLeft: "30px",
            color: "#1771e6",
          }}
        >
          Continue with Facebook
        </div>
      </button>

      <div className={styles.google}>
        <button
          style={{
            paddingLeft: "-50px",
            borderRadius: "0px",
            backgroundColor: "transparent",
            border: "none",
            height: "50px",
          }}
          // pl={-50}
          // borderRadius="0px"
          // backgroundColor="transparent"
          // border="none"
        >
          <Image
            h={5}
            w={6}
            ml={90}
            mt={3}
            src="https://banner2.cleanpng.com/20180324/sww/kisspng-google-logo-g-suite-chrome-5ab6e618b3b2c3.5810634915219358967361.jpg"
          />
          <div
            style={{
              marginRight: "80px",
              marginTop: "-25px",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            Google
          </div>
        </button>
      </div>
      <button
        style={{
          paddingLeft: "-50px",
          borderRadius: "0px",
          backgroundColor: "#f3993e",
          border: "none",
          height: "50px",
        }}
        // pl={-50}
        // borderRadius="0px"
        // backgroundColor="#f3993e"
        // border="none"
        // height="60px"
      >
        <Image
          h={5}
          w={12}
          ml={79}
          mt={-1}
          position="absolute"
          src="https://therevolvingdoorproject.org/wp-content/uploads/2021/02/amazon-logo.jpg"
        />
        <div
          style={{
            marginRight: "80px",
            position: "relative",
            top: "9px",
            color: "white",
            backgroundColor: "#f3993e",
            marginTop: "-20px",
            marginLeft: "140px",
            fontSize: "18px",
            fontWeight: "400",
            // border: "1px solid black",
            width: "100px",
          }}
        >
          Amazon
        </div>
      </button>

      <div>
        <div style={{ border: "1px solid black", margin: "40px 0px 20px 0px" }}>
          <Input
            border="none"
            placeholder="First name"
            borderRadius={0}
            value={firstName}
            name="firstName"
            onChange={handleChange}
          ></Input>
        </div>
        <div style={{ border: "1px solid black", marginBottom: "20px" }}>
          <Input
            border="none"
            value={lastName}
            name="lastName"
            placeholder="Last name"
            borderRadius={0}
            onChange={handleChange}
          ></Input>
        </div>
        <div style={{ border: "1px solid black", margin: "0px 0px 20px 0px" }}>
          <Input
            value={email}
            name="email"
            type="email"
            border="none"
            placeholder="Email"
            borderRadius={0}
            onChange={handleChange}
          ></Input>
        </div>
        <div style={{ border: "1px solid black", marginBottom: "20px" }}>
          <Input
            value={password}
            name="password"
            border="none"
            placeholder="Password"
            borderRadius={0}
            type="password"
            onChange={handleChange}
          ></Input>
        </div>

        <div>
          <ToastExample />
        </div>
      </div>
    </div>
  );
};

export default Register;

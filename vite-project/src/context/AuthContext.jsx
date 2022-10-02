import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // what i want globally
  // 1 - all users details
  // 2 - empty obj in which i will add input
  // 3 - handle change --> yeh login and register dono main lagega
  // But handle submit ko globally declare krne ki zarurat nhi qki yeh mko sirf register main hi lagega
  const [users, setUsers] = useState([]);

  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(details, "details");
  }, [details]);
  useEffect(() => {
    console.log(users, "users");
  }, [users]);

  const handleChange = (e) => {
    let { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  return (
    <AuthContext.Provider
      value={{
        details,
        setDetails,
        handleChange,
        users,
        setUsers,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

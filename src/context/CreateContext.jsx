import axios from "axios";
import React, { createContext, useState } from "react";
import { data } from "react-router-dom";

export const MyContext = createContext();
const CreateContext = ({ children }) => {
  const [name, setname] = useState("virat");
  const [email, setemail] = useState("virat@gmail.com");
  const [userData, setuserData] = useState(" ");

  const getUser = async () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/api/get-user", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setuserData(res.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSubmit = (item) => {
     const token = localStorage.getItem("token");
    axios.put("http://localhost:5000/api/update-user", item, {
      headers:{
        Authorization: token
      }
    })
    .then((res)=>{
      console.log(res.data)
    })
    .then((error)=>{
      console.log(error)
    })
  }

  return (
    <MyContext.Provider value={{ name, email, userData, getUser, handleSubmit }}>
      {children}
    </MyContext.Provider>
  );
};

export default CreateContext;

import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { MyContext } from "../context/CreateContext";

const Contact = () => {
  const { name, email } = useContext(MyContext);

  return (
    <div>
      <Navbar />
      <h1 className="text-9xl">
        {name}
        {email}
      </h1>
    </div>
  );
};

export default Contact;

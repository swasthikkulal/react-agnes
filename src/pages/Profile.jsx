import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/CreateContext";


const Profile = () => {
  const { userData, getUser, handleSubmit } = useContext(MyContext);
  const [update, setupdate] = useState({
    name:" ",
    email:" "
  })
  useEffect(() => {
    getUser();
  }, []);

  const handleChange = (e) => {
   setupdate({...update, [e.target.name]: e.target.value})
  };

  useEffect(() => {
    if (userData && userData.name) {
      setupdate({
        name: userData.name,
        email: userData.email
      });
    }
  }, [userData]);

  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <div className="flex flex-col w-[300px] p-3 border gap-10 h-[400px] items-center justify-center">
        <input className="w-full h-[50px] p-2 border"
          type="text"
          name="name"
          value={update.name}
          onChange={handleChange}
        />
        <input className="w-full h-[50px] p-2 border"
          type="email"
          name="email"
          value={update.email}
          onChange={handleChange}
        />
        <button className="px-3 py-2 bg-red-200" onClick={() => handleSubmit(update)}>
          update
        </button>
      </div>
    </div>
  );
};

export default Profile;

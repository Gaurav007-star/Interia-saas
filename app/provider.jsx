"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserDetailsProvider } from "./_context/UserDetailsProvider";

const Provider = ({ children }) => {
  const { user } = useUser();

  const[userData,setUserData] = useState()

  useEffect(() => {
    if (user) {
      VerifyUser();
    }
  }, [user]);

  const VerifyUser = async () => {
    const userData = await axios.post("/api/user", { user: user });
    if(userData.status==200){
      setUserData(userData.data.user)
    }
  };

  return (
    <UserDetailsProvider.Provider value={{userData,setUserData}}>
      <div>{children}</div>
    </UserDetailsProvider.Provider>
  );
};

export default Provider;

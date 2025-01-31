"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect } from "react";

const Provider = ({ children }) => {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      VerifyUser();
    }
  }, [user]);

  const VerifyUser = async () => {
    const userData = await axios.post("/api/user", { user: user });
    console.log(userData.data);
  };

  return <div>{children}</div>;
};

export default Provider;

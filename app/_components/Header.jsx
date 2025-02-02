"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { useUserContext } from "../_context/UserDetailsProvider";
import Loader from "./Loader";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { userData } = useUserContext();

  return (
    <div className="flex justify-between items-center py-2">
      <div className="left flex items-center gap-2">
        <Image src={"/icon.svg"} height={50} width={50} alt="icon" />
        <h1 className="text-[20px] font-bold">Shirt designer</h1>
      </div>

      <Button variant="ghost" className="text-violet-600 font-bold">
        Buy more credits✨
      </Button>

      <div className="right flex items-center w-auto h-auto gap-2">
        <div className="credits flex items-center justify-center bg-violet-300 px-3 py-1 rounded-full shadow-md">
          <TiStarFullOutline style={{ color: "#c710ff" }} />
          <span>{userData ? userData.credits : <Loader />}</span>
        </div>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;

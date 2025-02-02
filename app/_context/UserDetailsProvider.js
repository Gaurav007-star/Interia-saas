"use client"
import { createContext, useContext } from "react";

// Custom hook to use the context
export const UserDetailsProvider = createContext()
export const useUserContext = () => useContext(UserDetailsProvider);
"use client";

import React, { createContext, useState } from "react";
import Children from "../models/Children";

interface LoggedContextProps {
  isLoggedIn: boolean;
  handleLogIn: () => void;
  handleLogOut: () => void;
}

const defaultState = {
  isLoggedIn: false,
  handleLogIn: () => {},
  handleLogOut: () => {},
};

const LoggedContext = createContext<LoggedContextProps>(defaultState);

const LoggedProvider = (props: Children) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = () => {
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    window.location.href = "/";
  };

  const data = { isLoggedIn, handleLogIn, handleLogOut };
  return (
    <LoggedContext.Provider value={data}>
      {props.children}
    </LoggedContext.Provider>
  );
};

export default LoggedContext;
export { LoggedProvider };

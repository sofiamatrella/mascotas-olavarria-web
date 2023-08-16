"use client";

import React, { createContext, useEffect, useMemo, useState } from "react";
import Children from "../models/Children";
import { getCookie } from "cookies-next";

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
  const token = getCookie("auth-token");

  useEffect(() => {
    if (token) handleLogIn();
  }, []);

  const handleLogIn = () => {
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    window.location.href = "/";
  };

  const data = useMemo(
    () => ({
      isLoggedIn,
      handleLogIn,
      handleLogOut,
    }),
    [isLoggedIn, handleLogIn, handleLogOut]
  );

  return (
    <LoggedContext.Provider value={data}>
      {props.children}
    </LoggedContext.Provider>
  );
};

export default LoggedContext;
export { LoggedProvider };

import React, { createContext } from "react";

export const MainContext = createContext();
export const MainProvider = (props) => {
  const hello = "hello world";

  return (
    <MainContext.Provider value={{ hello }}>
      {props.children}
    </MainContext.Provider>
  );
};

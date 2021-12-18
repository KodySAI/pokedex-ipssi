import React, { createContext, useEffect, useState } from "react";
import PokemonApi from "../../Api/PokemonApi/PokemonApi";

export const MainContext = createContext();
export const MainProvider = (props) => {
  const [data, setData] = useState([]);
  const getPokemonList = async () => {
    const response = await PokemonApi.get("pokemon");
    setData(response.data.results);
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <MainContext.Provider value={{ data }}>
      {props.children}
    </MainContext.Provider>
  );
};

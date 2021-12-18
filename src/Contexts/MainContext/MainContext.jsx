import React, { createContext, useEffect, useState } from "react";
import PokemonApi from "../../Api/PokemonApi/PokemonApi";

export const MainContext = createContext();

export const MainProvider = (props) => {
  const [data, setData] = useState([]);

  const getPokemonList = async () => {
    const response = await PokemonApi.get("pokemon");

    const responseDetails = await Promise.all(
      response.data.results.map((el) => {
        return PokemonApi.get(`/pokemon/${el.name}`);
      })
    );
    const responseDetailsData = responseDetails.map((el) => {
      return el.data;
    });
    console.log(responseDetailsData);
    setData(responseDetailsData);
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

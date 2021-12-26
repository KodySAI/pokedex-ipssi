import React, { createContext, useEffect, useState } from "react";
import PokemonApi from "../../Api/PokemonApi/PokemonApi";

export const MainContext = createContext();

export const MainProvider = (props) => {
  const [data, setData] = useState([]);

  const getPokemonList = async () => {
    const response = await PokemonApi.get("pokemon");

    const responseDetails = await Promise.all(
      response.data.results.map((item) => {
        return PokemonApi.get(`/pokemon/${item.name}`);
      })
    );
    const responseDetailsData = responseDetails.map((item) => {
      return item.data;
    });
    localStorage.setItem("pokemonList", JSON.stringify(responseDetailsData));
  };

  useEffect(() => {
    getPokemonList();
    const storageData = JSON.parse(localStorage.getItem("pokemonList"));
    setData(storageData);
  }, []);
  console.log(data);

  return (
    <MainContext.Provider value={{ data, getPokemonList, setData }}>
      {props.children}
    </MainContext.Provider>
  );
};

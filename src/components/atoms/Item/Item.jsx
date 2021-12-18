import React, { useEffect, useState } from "react";
import PokemonApi from "../../../Api/PokemonApi/PokemonApi";

const Item = ({ pokemon }) => {
  const { url } = pokemon;

  const [foundedPokemon, setFoundedPokemen] = useState([]);

  var num = url.replace(/[^0-9]/g, "").slice(1);

  const getPokemon = async () => {
    const response = await PokemonApi.get(`pokemon/${num}`);
    console.log(response.data);
    setFoundedPokemen(response.data);
  };

  console.log(foundedPokemon);

  const { name, sprites } = foundedPokemon;

  useEffect(() => {
    getPokemon();
  }, []);
  return (
    <div className="w-64 h-72 ">
      {name}
      <img src={sprites.front_default} alt="" />
    </div>
  );
};

export default Item;

import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MainContext } from "../Contexts/MainContext/MainContext";

const Pokemon = () => {
  const { pokemonName } = useParams();

  const { data } = useContext(MainContext);

  const getPokemon = data.find((pokemon) => pokemon.name === pokemonName);

  const foundedPokemon = { ...getPokemon };

  const { name, id, order, weight, sprites } = foundedPokemon;
  const getCss = () => {
    return {
      backgroundImage: `url(${
        sprites ? sprites.other.dream_world.front_default : ""
      })`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      width: "100%",
      height: "80%",
      position: "relative",
    };
  };
  console.log(foundedPokemon.sprites.front_default);
  return (
    <div className="w-64 h-72 rounded-md m-auto bg-white shadow-lg">
      <h1 className="mx-auto w-max">
        {name} <span>No.{order}</span>
      </h1>
      <div style={getCss()} />
      <div></div>
    </div>
  );
};

export default Pokemon;

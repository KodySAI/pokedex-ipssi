import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PokemonApi from "../../Api/PokemonApi/PokemonApi";

const dataTypes = [
  "normal",
  "poison",
  "psychic",
  "grass",
  "ground",
  "ice",
  "fire",
  "rock",
  "dragon",
  "water",
  "bug",
  "dark",
  "fighting",
  "ghost",
  "steel",
  "flying",
  "electric",
  "fairy",
];

const TypesPage = () => {
  const { urlValue } = useParams();
  const [data, setData] = useState([]);

  const filterByType = async (urlParam) => {
    const response = await PokemonApi.get(`type/${urlParam}`);

    const responseAllTypePokemon = await Promise.all(
      response.data.pokemon.map((item) => {
        return axios.get(`${item.pokemon.url}`);
      })
    );
    const fetchedData = responseAllTypePokemon.map((item) => item.data);
    setData(fetchedData);
  };

  useEffect(() => {
    filterByType(urlValue);
  }, [urlValue]);

  return (
    <div className="w-8/12 bg-white m-auto p-4">
      <h1>Research pokemon by Type</h1>
      <div className="flex flex-wrap w-9/12 mx-auto my-8 border">
        {dataTypes.map((item) => {
          return (
            <button
              key={item}
              value={item}
              className={`capitalize px-2 p-1 text-lg w-20 rounded-lg m-2 ${item}`}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap m-auto justify-center">
        {data.map((item) => {
          const getCss = () => {
            return {
              backgroundImage: `url(${item.sprites.other["official-artwork"].front_default})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              width: "100%",
              height: "80%",
              position: "relative",
            };
          };
          return (
            <Link to={`/pokemon/${item.name}`} key={item.name} replace>
              <div
                className={`w-64 h-80 rounded-lg m-auto bg-white m-2 p-6  ${item.types[0].type.name}`}
              >
                <div className="cursor-pointer rounded-t-lg" style={getCss()} />
                <h1 className="capitalize my-2 text-2xl font-bold">
                  {item.name}
                </h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TypesPage;

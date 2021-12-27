import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PokemonApi from "../../Api/PokemonApi/PokemonApi";
import Loader from "../../components/atoms/Loader/Loader";

const TypesPage = () => {
  const { urlValue } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const filterByType = async (urlParam) => {
    setIsLoading(true);
    const response = await PokemonApi.get(`type/${urlParam}`);

    const responseAllTypePokemon = await Promise.all(
      response.data.pokemon.map((item) => {
        return axios.get(`${item.pokemon.url}`);
      })
    );
    const fetchedData = responseAllTypePokemon.map((item) => item.data);
    setData(fetchedData);
    setTimeout(() => setIsLoading(false), 500);
  };

  useEffect(() => {
    filterByType(urlValue);
  }, [urlValue]);

  return (
    <div>
      {isLoading ? (
        <div className="h-screen">
          <Loader />
        </div>
      ) : (
        <div className="w-8/12 bg-white m-auto p-4">
          <h1 className="  my-4 text-xl">
            Filtered by pokemon Type :{" "}
            <span className="capitalize font-bold">{urlValue}</span>
          </h1>
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
                    className={`w-64 h-80 rounded-lg m-auto bg-white m-4 p-4 ${item.types[0].type.name}`}
                  >
                    <div
                      className="cursor-pointer rounded-t-lg"
                      style={getCss()}
                    />
                    <h1 className="capitalize my-2 text-2xl font-bold">
                      {item.name}
                    </h1>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TypesPage;

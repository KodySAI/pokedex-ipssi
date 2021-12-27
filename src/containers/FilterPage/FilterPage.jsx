import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import PokemonApi from "../../Api/PokemonApi/PokemonApi";

const FilterPage = () => {
  const { urlValue } = useParams();
  const [data, setData] = useState({});
  const getFilteredPokemons = async (urlParam) => {
    const result = await PokemonApi.get(`pokemon/${urlParam}`);
    setData(result.data);
  };

  useEffect(() => {
    getFilteredPokemons(urlValue);
  }, [urlValue]);

  console.log(data);

  const { name, sprites, types } = data;
  console.log(sprites);

  const getCss = () => {
    return {
      backgroundImage: `url(${
        sprites ? sprites.other["official-artwork"].front_default : null
      })`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      width: "100%",
      height: "80%",
      position: "relative",
    };
  };

  return (
    <div className="h-screen ">
      <div className="mx-auto my-8  bg-white w-8/12 h-3/6 p-8 rounded-lg">
        <h1 className="text-xl font-bold my-8">Results of research</h1>
        <div className="flex justify-center">
          <div
            className={`w-64 h-72 rounded-lg m-auto bg-white m-2 p-4 ${
              types ? types[0].type.name : null
            }`}
          >
            <Link to={`/pokemon/${name}`} replace>
              <div className="cursor-pointer rounded-t-lg" style={getCss()} />
            </Link>
            <h1>{data.name}</h1>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;

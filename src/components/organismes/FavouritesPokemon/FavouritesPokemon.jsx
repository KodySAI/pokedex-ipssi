import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FavouritesPokemon = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("liked"));
    setData(storageData);
  }, []);

  return (
    <div>
      {!data ? (
        <div> No pokemon added in favourite</div>
      ) : (
        <div className="w-8/12 h-screen bg-white m-auto p-4">
          <h1 className="text-xl font-bold my-8">Favourites pokemons</h1>
          <div className="flex flex-wrap justify-center">
            {data.map((item) => {
              const getCss = () => {
                return {
                  backgroundImage: `url(${item.sprites.other.dream_world.front_default})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  width: "100%",
                  height: "80%",
                  position: "relative",
                };
              };
              return (
                <div
                  className={`w-64 h-80 rounded-lg m-auto bg-white m-2 p-6 relative ${item.types[0].type.name}`}
                  key={item.name}
                >
                  <Link to={`/pokemon/${item.name}`} replace>
                    <div
                      className="cursor-pointer rounded-t-lg"
                      style={getCss()}
                    />
                    <h1 className="capitalize my-2 text-2xl font-bold">
                      {item.name}
                    </h1>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FavouritesPokemon;

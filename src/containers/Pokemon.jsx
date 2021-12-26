import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonApi from "../Api/PokemonApi/PokemonApi";

const Pokemon = () => {
  const { urlName } = useParams();
  const [foudedPokemon, setFoundedPokemon] = useState({});

  const getPokemon = async () => {
    const response = await PokemonApi.get(`pokemon/${urlName}`);
    setFoundedPokemon(response.data);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const { name, order, weigth, sprites, stats } = foudedPokemon;
  console.log(name);

  const getCss = () => {
    return {
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      width: "100%",
      height: "100%",
      position: "relative",
    };
  };
  return (
    <div className="w-9/12 rounded-md m-auto bg-white shadow-lg p-4">
      <h1 className="mx-auto my-8 w-max">{name}</h1>
      <div className="flex flex-wrap">
        <img
          className="w-12/12 bg-contain bg-center bg-no-repeat"
          src={sprites ? sprites.other["official-artwork"].front_default : null}
          alt=""
        />
        <div>
          <table>
            <tbody>
              {stats
                ? stats.map((item) => {
                    const barChartWidth = item.base_stat + 50;
                    return (
                      <tr key={item.stat.name} className=" text-left">
                        <td>
                          <strong className="mx-2 ">{item.stat.name}</strong>
                        </td>
                        <td>
                          <div
                            style={{ width: barChartWidth }}
                            className="px-3 py-1 bg-orange-700 rounded-full m-1"
                          >
                            {item.base_stat}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
      <div />
      <div></div>
    </div>
  );
};

export default Pokemon;

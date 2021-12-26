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

  const { name, order, height, weight, sprites, stats } = foudedPokemon;
  console.log(foudedPokemon);

  const floatVal = (val) => {
    return val / 10;
  };

  return (
    <div className="w-9/12 rounded-md m-auto bg-white shadow-lg p-4">
      <div className="w-80 flex flex-wrap mx-auto my-8 place-items-center justify-center">
        <div className="w-16 h-16 flex place-items-center justify-center mx-auto p-3 text-white font-bold rounded-full bg-gray-900">
          <span>N° {order}</span>
        </div>
        <h1 className="text-5xl font-bold capitalize">{name}</h1>
      </div>
      <div className="w-9/12 flex flex-wrap m-auto justify-around text-xl">
        <div>
          <img
            className="w-12/12 bg-contain bg-center bg-no-repea "
            src={
              sprites ? sprites.other["official-artwork"].front_default : null
            }
            alt=""
          />
          <h1 className="mx-auto w-64 py-1 px-5 my-4 rounded-full bg-blue-500 text-center w-max">
            {name}
          </h1>
        </div>
        <div className="m-auto w-4/12">
          <table>
            <tbody>
              {stats
                ? stats.map((item) => {
                    const barChartWidth = item.base_stat + 50;
                    return (
                      <tr key={item.stat.name} className=" text-left">
                        <td>
                          <strong className="mx-2 capitalize">
                            {item.stat.name}
                          </strong>
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
      <div>
        <div className="flex flex-wrap rounded-lg bg-blue-500 w-5/12 p-4 text-2xl justify-around">
          <div className="text-left">
            <div className="my-4">
              <h3 className="my-4 text-white font-bold">Height</h3>
              <p>{floatVal(height)} m</p>
            </div>
            <div className="my-4">
              <h3 className="my-4 text-white font-bold">Weight</h3>
              <p>{floatVal(weight)} kg</p>
            </div>
            <div className="my-4">
              <h3 className="my-4 text-white font-bold">Weight</h3>
              <p>{weight}</p>
            </div>
          </div>
          <div className="text-left">
            <div className="my-4">
              <h3 className="my-4 text-white font-bold">Height</h3>
              <p>{height}</p>
            </div>
            <div className="my-4">
              <h3 className="my-4 text-white font-bold">Weight</h3>
              <p>{weight}</p>
            </div>
          </div>
        </div>
      </div>
      <div />
      <div></div>
    </div>
  );
};

export default Pokemon;

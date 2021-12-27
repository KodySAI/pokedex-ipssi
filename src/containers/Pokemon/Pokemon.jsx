import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PokemonApi from "../../Api/PokemonApi/PokemonApi";
import "./pokemon.css";

const Pokemon = () => {
  const { urlName } = useParams();
  const [foundedPokemon, setFoundedPokemon] = useState({});
  const [species, setSpecies] = useState({});
  const [evolve, setEvolve] = useState({});

  const getPokemon = async (urlValue) => {
    const response = await PokemonApi.get(`pokemon/${urlValue.toLowerCase()}`);
    setFoundedPokemon(response.data);

    const response2 = await axios.get(`${response.data.species.url}`);
    setSpecies(response2.data);

    const response3 = await axios.get(`${response2.data.evolution_chain.url}`);
    setEvolve(...response3.data.chain.evolves_to);
  };

  useEffect(() => {
    getPokemon(urlName);
    window.scrollTo(0, 0);
  }, [urlName]);

  console.log(evolve);

  const { name, order, height, weight, sprites, stats, types, abilities } =
    foundedPokemon;
  const {
    egg_groups,
    base_happiness,
    capture_rate,
    color,
    evolves_from_species,
  } = species;

  const floatVal = (val) => {
    return val / 10;
  };

  return (
    <div className="w-9/12 rounded-md m-auto bg-white shadow-lg p-4 mb-8">
      <div className="w-80 flex flex-wrap mx-auto my-8 place-items-center justify-center">
        <div className="w-16 h-16 flex place-items-center justify-center mx-auto p-3 text-white font-bold rounded-full bg-gray-900">
          <span>N°{order}</span>
        </div>
        <h1 className="text-5xl font-bold capitalize">{name}</h1>
      </div>
      <div className="w-9/12 flex flex-wrap m-auto justify-around shadow mb-8 rounded text-xl">
        <div>
          <img
            className="w-12/12 bg-contain bg-center bg-no-repea "
            src={
              sprites ? sprites.other["official-artwork"].front_default : null
            }
            alt=""
          />
          <h1 className="mx-auto w-64 py-1 px-5 my-4 rounded-full bg-blue-400 text-center capitalize">
            {name}
          </h1>
        </div>
        <div className="m-auto">
          <table>
            <tbody>
              {stats
                ? stats.map((item) => {
                    const barChartWidth = item.base_stat + 60;
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
                            className="px-3 py-1 bg-orange-700 text-white rounded-full m-1"
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
      <div className="flex flex-wrap w-9/12 m-auto justify-center">
        <div className="flex flex-wrap rounded-lg bg-blue-400 w-7/12 p-4 text-2xl justify-around">
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
              <h3 className="my-4 text-white font-bold">Capture rate</h3>
              <p>{capture_rate}</p>
            </div>
          </div>
          <div className="text-left">
            <div className="my-4">
              <h3 className="my-4 text-white font-bold">Species</h3>
              <p>
                {egg_groups
                  ? species.egg_groups.map((item) => {
                      return (
                        <span className="capitalize" key={item.name}>
                          {item.name}{" "}
                        </span>
                      );
                    })
                  : null}
              </p>
            </div>
            <div className="my-4">
              <h3 className="my-4 text-white font-bold">Base happiness</h3>
              <p>{base_happiness}</p>
            </div>
            <div className="my-4">
              <h3 className="my-4 text-white font-bold">Color</h3>
              <p className="capitalize">{color ? color.name : null}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-left">
            <h1 className="mx-4 mb-4 text-xl font-bold">Type</h1>
            <div className="flex flex-wrap mx-4 justify-start w-80">
              {types
                ? types.map((item) => {
                    return (
                      <div
                        className={`p-2 w-28 mr-2 rounded-full border-4 border-gray-200 text-white capitalize font-bold text-center ${item.type.name}`}
                        key={item.type.name}
                      >
                        {item.type.name}
                      </div>
                    );
                  })
                : null}
            </div>

            <h1 className="m-4 text-xl font-bold">Abilities</h1>
            <div className="flex flex-wrap mx-4 justify-start w-80">
              {abilities
                ? abilities.map((item) => {
                    return (
                      <div
                        className="p-2 w-28 mr-2 rounded text-white capitalize font-bold text-center bg-gray-900"
                        key={item.ability.name}
                      >
                        {item.ability.name}
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
      <div />
      <div className="bg-gray-800 w-9/12 mx-auto my-8 p-8 rounded">
        <h1 className="mb-8 text-xl font-bold text-white">Evolutions</h1>
        <div className="flex flex-wrap justify-center place-items-center">
          <div>
            {evolves_from_species ? (
              <div className="flex justify-center capitalize">
                <div className="bg-white w-32 rounded">
                  <Link to={`/pokemon/${evolves_from_species.name}`} replace>
                    <p>{evolves_from_species.name}</p>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-white w-32 rounded capitalize">
                <p>{name}</p>
              </div>
            )}
          </div>
          <div>
            {evolve && evolve.species && (
              <div className="flex justify-center capitalize ml-8">
                <div id="arrowAnim">
                  <div className="arrowSliding">
                    <div className="arrow"></div>
                  </div>
                  <div className="arrowSliding delay1">
                    <div className="arrow"></div>
                  </div>
                  <div className="arrowSliding delay2">
                    <div className="arrow"></div>
                  </div>
                </div>
                <div className="bg-white w-32 rounded ml-8">
                  <Link to={`/pokemon/${evolve.species.name}`} replace>
                    <p>{evolve.species.name}</p>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div>
            {evolve && (
              <div className="flex justify-center capitalize ml-8">
                <div id="arrowAnim">
                  <div className="arrowSliding">
                    <div className="arrow"></div>
                  </div>
                  <div className="arrowSliding delay1">
                    <div className="arrow"></div>
                  </div>
                  <div className="arrowSliding delay2">
                    <div className="arrow"></div>
                  </div>
                </div>
                <div className="bg-white w-32 rounded ml-8">
                  {evolve.evolves_to
                    ? evolve.evolves_to.map((item) => {
                        return (
                          <Link
                            to={`/pokemon/${item.species.name}`}
                            replace
                            key={item.species.name}
                          >
                            <p>{item.species.name}</p>
                          </Link>
                        );
                      })
                    : null}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;

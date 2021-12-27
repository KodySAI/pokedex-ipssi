import React from "react";
import { useNavigate } from "react-router-dom";

const FilterType = () => {
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

  const navigate = useNavigate();
  return (
    <div className="w-9/12 mx-auto my-8 rounded-lg bg-white shadow pb-3">
      <h1 className="font-bold my-2">by Type</h1>
      <div className="flex flex-wrap  justify-center ">
        {dataTypes.map((item) => {
          const redirect = () => {
            navigate(`/type/${item}`);
          };
          return (
            <button
              key={item}
              value={item}
              onClick={redirect}
              className={`capitalize px-2 p-1 text-lg w-20 rounded-lg m-2 ${item}`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterType;

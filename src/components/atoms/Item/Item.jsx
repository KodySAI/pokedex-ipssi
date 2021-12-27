import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = (props) => {
  const getCss = () => {
    return {
      backgroundImage: `url(${props.sprites.other.dream_world.front_default})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      width: "100%",
      height: "80%",
      position: "relative",
    };
  };

  const types = props.types.map((item) => {
    return item.type.name;
  });

  return (
    <Link to={`pokemon/${props.name}`}>
      <div
        className={`w-64 h-80 rounded-lg m-auto bg-white m-2 p-6  ${props.types[0].type.name}`}
      >
        <div className="cursor-pointer rounded-t-lg" style={getCss()} />
        <h1 className="capitalize my-2 text-2xl font-bold">{props.name}</h1>
        <div className="my-2 flex flex-wrap justify-center text-white">
          {types.map((item) => {
            return (
              <div
                key={item}
                className={`mx-2 ${item} text-xs border-2 border-gray-200 rounded-md px-2 capitalize w-16`}
              >
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default Item;

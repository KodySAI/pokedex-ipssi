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

  const types = props.types.map((el) => {
    return el.type.name;
  });

  return (
    <Link to={`pokemon/${props.name}`}>
      <div
        className={`w-64 h-72 rounded-lg m-auto bg-white m-2 p-4 ${props.types[0].type.name}`}
      >
        <div className="cursor-pointer rounded-t-lg" style={getCss()} />
        <h1>{props.name}</h1>
        <div>
          {types.map((el) => {
            return (
              <span key={el} className="mx-2">
                {el}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default Item;

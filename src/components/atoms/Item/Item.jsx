import React, { useState } from "react";
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

  const [liked, setLiked] = useState(false);

  const types = props.types.map((item) => {
    return item.type.name;
  });

  const handleClick = () => {
    setLiked(!liked);

    const currentStorage = JSON.parse(localStorage.getItem("liked")) || [];

    if (!currentStorage.includes(props)) {
      currentStorage.push(props);
    }
    localStorage.setItem("liked", JSON.stringify(currentStorage));
  };

  return (
    <div
      className={`w-64 h-80 rounded-lg m-auto bg-white my-4 p-6 relative ${props.types[0].type.name}`}
    >
      <div
        className={`w-6 h-6 rounded-full absolute bg-white right-3 top-1 cursor-pointer`}
        onClick={() => handleClick()}
      >
        <i
          className={`fas fa-heart m-auto ${liked ? "text-red-500" : null}`}
        ></i>
      </div>
      <Link to={`pokemon/${props.name}`}>
        <div className="cursor-pointer rounded-t-lg" style={getCss()} />
        <h1 className="capitalize my-2 text-2xl font-bold">{props.name}</h1>
      </Link>
      <div className="my-2 flex flex-wrap justify-center text-white">
        {types.map((item) => {
          return (
            <div
              key={item}
              className={`mx-2 ${item} text-xs border-2 border-white rounded-md px-2 capitalize w-16`}
            >
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Item;

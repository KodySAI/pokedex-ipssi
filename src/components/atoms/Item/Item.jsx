import React from "react";

const Item = (props) => {
  const getCss = () => {
    const cardStyles = {
      backgroundImage: `url(${props.sprites.front_default})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      width: "100%",
      height: "80%",
      position: "relative",
    };
    return cardStyles;
  };

  const types = props.types.map((el) => {
    return el.type.name;
  });

  console.log(types);

  return (
    <div className="border w-64 h-72 rounded-md m-auto bg-white">
      <div className="cursor-pointer rounded-t-lg" style={getCss(props)} />
      <h1>{props.name}</h1>
      <div>
        {types.map((el) => {
          return <span className="mx-2">{el}</span>;
        })}
      </div>
    </div>
  );
};

export default Item;

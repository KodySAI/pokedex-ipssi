import React, { useContext } from "react";
import { MainContext } from "../../../Contexts/MainContext/MainContext";
import Item from "../../atoms/Item/Item";

const List = () => {
  const { data } = useContext(MainContext);

  return (
    <div className="mx-auto flex flex-wrap w-9/12 my-8  p-4 justify-between">
      {data.map((pokemon) => (
        <Item key={pokemon.name} {...pokemon} />
      ))}
    </div>
  );
};

export default List;

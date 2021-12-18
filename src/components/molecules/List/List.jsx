import React, { useContext } from "react";
import { MainContext } from "../../../Contexts/MainContext/MainContext";
import Item from "../../atoms/Item/Item";

const List = () => {
  const { data } = useContext(MainContext);
  console.log(data);

  return (
    <div className="mx-auto flex flex-wrap border w-10/12 my-8  p-4">
      {data.map((pokemon) => (
        <Item key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default List;

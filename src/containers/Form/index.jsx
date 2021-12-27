import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PokemonApi from "../../Api/PokemonApi/PokemonApi";

export const Form = (props) => {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    const fieldValue = event.target.value;
    setInputValue(fieldValue);
  };
  console.log(inputValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    const getPokemon = async () => {
      const result = await PokemonApi.get(`/pokemon/${inputValue}`);
      console.log(result.data.name);
      const redirect = () => {
        navigate(`/filter_list/${result.data.name}`);
      };
      redirect();
    };
    getPokemon();
  };

  return (
    <div className="mx-auto m-5">
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          className="text-gray-900 w-10/12 h-10 border p-2 rounded-bl rounded-tl"
          type="text"
          placeholder="Search..."
          name="inputSearchValue"
          value={inputValue}
          onChange={(event) => handleChange(event)}
        />
        <button className="border border-white h-10" type="submit">
          submit
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

import React, { useState, useContext } from "react";
import { MainContext } from "../../Context/MainContext";

export const Form = () => {
  const { setFoundedApp, data } = useContext(MainContext);

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const fieldValue = event.target.value;
    setInputValue(fieldValue);

    const foundAppartments = data.filter((item, index) =>
      item.title.toLowerCase().includes(fieldValue.toLowerCase())
    );

    if (fieldValue === "") {
      setFoundedApp(data);
    } else {
      setFoundedApp(foundAppartments);
    }
    console.log(data);
  };

  return (
    <div className="mx-auto m-5">
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          className="text-gray-900 w-10/12 h-10 border p-2 rounded"
          type="text"
          placeholder="Search..."
          // autoComplete="off"
          name="inputSearchValue"
          value={inputValue}
        />
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

import React, { useState } from "react";
import FilterType from "../../../containers/FilterType/FilterType";

import List from "../../molecules/List/List";

const HomeScreen = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div>
      <h1 className="text-2xl font-bold my-8">POKEMONS</h1>
      <div className="w-8/12 mx-auto">
        <p
          className="cursor-pointer p-1 w-20 hover:bg-gray-200 rounded"
          onClick={(e) => setShowFilter(!showFilter)}
        >
          <i className="fa fa-sliders" aria-hidden="true"></i> Filter
        </p>
        {showFilter && <FilterType />}
      </div>
      <List />
    </div>
  );
};

export default HomeScreen;

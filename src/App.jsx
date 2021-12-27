import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/molecules/Footer";
import Nav from "./components/molecules/Nav/Nav";
import FavouritesPokemon from "./components/organismes/FavouritesPokemon/FavouritesPokemon";
import HomeScreen from "./components/organismes/HomeScreen/HomeScreen";
import FilterPage from "./containers/FilterPage/FilterPage";
import Pokemon from "./containers/Pokemon/Pokemon";
import TypesPage from "./containers/TypesPage/TypesPage";

import { MainProvider } from "./Contexts/MainContext/MainContext";

function App() {
  return (
    <MainProvider>
      <div className="h-12/12 w-12/12 text-center bg-blue-100">
        <Nav />
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/pokemon" exact element={<HomeScreen />} />
          <Route path="/pokemon/:urlName" exact element={<Pokemon />} />
          <Route path="/filter_list/:urlValue" exact element={<FilterPage />} />
          <Route path="/type/:urlValue" exact element={<TypesPage />} />
          <Route
            path="/my_favourites_pokemons"
            exact
            element={<FavouritesPokemon />}
          />
        </Routes>
        <Footer />
      </div>
    </MainProvider>
  );
}

export default App;

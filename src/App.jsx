import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/molecules/Footer";
import Nav from "./components/molecules/Nav/Nav";
import HomeScreen from "./components/organismes/HomeScreen/HomeScreen";
import Pokemon from "./containers/Pokemon/Pokemon";

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
        </Routes>
        <Footer />
      </div>
    </MainProvider>
  );
}

export default App;

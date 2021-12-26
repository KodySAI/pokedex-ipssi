import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomeScreen from "./components/organismes/HomeScreen/HomeScreen";
import Pokemon from "./containers/Pokemon";

import { MainProvider } from "./Contexts/MainContext/MainContext";

function App() {
  return (
    <MainProvider>
      <div className=" h-screen w-screen text-center bg-blue-100">
        <div>hello the is the header</div>
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/pokemon/:urlName" exact element={<Pokemon />} />
        </Routes>
        <div>this is the footer</div>
      </div>
    </MainProvider>
  );
}

export default App;

import React from "react";

import "./App.css";
import HomeScreen from "./components/organismes/HomeScreen/HomeScreen";

import { MainProvider } from "./Contexts/MainContext/MainContext";

function App() {
  return (
    <MainProvider>
      <div className="bg-blue-100">
        <HomeScreen />
      </div>
    </MainProvider>
  );
}

export default App;

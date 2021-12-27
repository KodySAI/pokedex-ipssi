import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="my-16">
      <h1 className="text-xl font-bold">Loading...</h1>
      <div className="cubes">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
      </div>
    </div>
  );
};

export default Loader;

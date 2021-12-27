import React from "react";
import { Link } from "react-router-dom";

import "./nav.css";

const Nav = () => {
  return (
    <div className="flex flex-wrap items-center relative navBgColor text-white h-20 px-8 justify-between">
      <div className="logo-div text-left">
        <Link to="/" exact="true">
          <div className="flex flex-wrap place-items-center">
            <img className="h-16 w-16" src="logo.png" alt="" />
            <h1 className="text-white text-2xl leading-5 font-bold ">
              Pokedex
            </h1>
          </div>
        </Link>
      </div>
      <div className="form-div"></div>

      <div className="flex flex-wrap list-none div-list justify-between">
        <li className="mx-4 font-bold hover:text-blue-500 cursor-pointer text-sm">
          Mansion
        </li>
        <Link to="/" exact="true">
          <li className="mx-4 font-bold hover:text-blue-500 cursor-pointer text-sm">
            Appartments
          </li>
        </Link>
        <Link to="/baconApi">
          <li className="mx-4 font-bold hover:text-blue-500 cursor-pointer text-sm">
            Bacon Ipsum
          </li>
        </Link>
      </div>

      {/* <div>
        <button className="mx-2 text-sm">SINGIN</button>
        <button className="mx-2 text-sm">SINGUP</button>
      </div> */}
    </div>
  );
};

export default Nav;

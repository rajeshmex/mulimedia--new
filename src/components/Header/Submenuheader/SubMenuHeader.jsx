// eslint-disable-next-line no-unused-vars
import React from "react";
import allLinks from "./SubmenuConstants";
import { NavLink } from "react-router-dom";
import "./subheader.css";
import Movingtext from "./Movingtext";
const SubMenuHeader = () => {
  return (
    <>
      <div className="w-full ra md:flex hidden overflow-x-auto bg-white flex-nowrap shadow-md border-b-[#363636]  ">
        {allLinks.map((elm) => {
          // console.log(elm);
          return (
            <NavLink
              to={elm.path}
              className="flex flex-grow flex-1 py-3 hover:text-sky-800 font-semibold capitalize transition-colors duration-150 ease-out px-1 text-center items-center justify-center border-b-2 hover:border-b-solid hover:border-blue-700  "
              key={elm.id}
            >
              <span className="hover:text-[#ff10f0] "> {elm.name} </span>
            </NavLink>
          );
        })}
      </div>
      <Movingtext></Movingtext>
    </>
  );
};

export default SubMenuHeader;

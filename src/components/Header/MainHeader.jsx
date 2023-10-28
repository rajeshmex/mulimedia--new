// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// import { Logo } from "../../assets/images/logo.svg";
import {
  BiSearchAlt2,
  BiMicrophone,
  BiMessageRoundedDots,
} from "react-icons/bi";
// import { HiBellAlert } from "react-icons/hi";
import { AiOutlineUser, AiFillAlert } from "react-icons/ai";
import { BsDropbox, BsQuestionCircle } from "react-icons/bs";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { NavLink } from "react-router-dom";

// import { FaMicrophoneLines } from "react-icons/fa";
const MainHeader = () => {
  const [showlang, setshowlang] = useState(false);
  const [isListening, setIsListenings] = useState(false);

  const startListening = () => {
    setIsListenings(true);
  };
  const stopListening = () => {
    setIsListenings(false);
  };

  const showlanguage = () => {
    setshowlang(!showlang);
  };

  const inputStyles = {
    outline: "none",
    border: "none",
    width: "100%",
    padding: "2px",
    boxShadow: "none",
    backgroundColor: "transparent",
  };

  return (
    <>
      <div className="w-full flex bg-slate-100 border">
        <div className="rightpart  w-1/2 flex justify-center items-center gap-5 px-5 ">
          {/* <div>
            <img
              src={Logo}
              alt=""
              className="h-16 "
              style={{ mixBlendMode: "multiply" }}
            />
          </div> */}
          <div className="h-10 md:w-full lg:flex hidden items-center md:gap-2 gap-1 px-3 rounded-2xl overflow-hidden bg-white ">
            <div className="nav-left">
              {/* <div id="nav-search-dropdown-card">
                <div className="nav-search-scope">
                  <select
                    className="nav-search-dropdown searchSelect border-none outline-none bg-transparent"
                    id="searchDropdownBox"
                    name="url"
                  >
                    <option selected="selected" value="search-alias=aps">
                      All Categories
                    </option>
                    <option value="search-alias=alexa-skills">
                      Alexa Skills
                    </option>
                    <option value="search-alias=amazon-devices">
                      Amazon Devices
                    </option>
                    <option value="search-alias=fashion">Amazon Fashion</option>
                    <option value="search-alias=nowstore">Amazon Fresh</option>
                    <option value="search-alias=amazon-pharmacy">
                      Amazon Pharmacy
                    </option>
                    
                  </select>
                </div>
              </div> */}
            </div>
            <input
              type="search"
              // className="w-full bg-transparent outline-none border-none"
              style={inputStyles}
              placeholder="Search Something"
            />
            <button onClick={isListening ? stopListening : startListening}>
              <BiMicrophone
                size={25}
                color={isListening ? "red" : "rgb(66 133 244)"}
              />
            </button>
            {isListening ? <p>Speak...</p> : <p></p>}
            <BiSearchAlt2 size={32} />
          </div>
          <div></div>
        </div>
        <div className="leftpart  w-1/2 flex justify-between items-center px-11">
          <div>
            <NavLink to={""} className="flex items-center  gap-1">
              <BsDropbox /> <span>Become a seller </span>
            </NavLink>
          </div>
          <div>
            <NavLink className="flex items-center  gap-1">
              <BiMessageRoundedDots />
              <span className="md:block hidden"> Chat</span>
            </NavLink>
          </div>
          <div className="flex">
            <NavLink className="flex   items-center  gap-1">
              <AiFillAlert />
              <span className="md:block hidden"> Alert</span>
            </NavLink>
            <span className="bg-white absolute left-[1027px] top-2 p-[2px] rounded-xl ">
              105
            </span>
          </div>
          <div>
            {" "}
            <NavLink className="flex items-center  gap-1">
              <BsQuestionCircle />
              <span className="block px-2 "> Help</span>
            </NavLink>
          </div>
          <div>
            <NavLink className="flex items-center  gap-1">
              <AiOutlineUser />
              <span> Login </span>
            </NavLink>
          </div>
          <div
            className="flex flex-row items-center gap-1 z-50 cursor-pointer "
            onClick={() => showlanguage()}
          >
            <GiEarthAsiaOceania />
            <span>EN</span>
          </div>
          {showlang ? (
            <div className="fixed right-5 top-12 " style={{ zIndex: "9999" }}>
              <p className=" cursor-pointer">Hindi</p>
              <p className=" cursor-pointer">English</p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default MainHeader;

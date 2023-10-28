// eslint-disable-next-line no-unused-vars
import React from "react";
// import Marquee from "react-fast-marquee";

const Movingtext = () => {
  return (
    <>
      <div className="bg-black border-1 h-10 text-white flex items-center align-middle justify-center">
        <marquee>
          <p className="runningtext mb-2 " style={{ fontSize: "20px" }}>
            moving text
          </p>
        </marquee>
      </div>
    </>
  );
};

export default Movingtext;

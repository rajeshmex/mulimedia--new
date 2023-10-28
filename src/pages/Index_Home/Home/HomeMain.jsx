import React from "react";

import Slidersec from "./Slidersec";
import PropertySlider from "./PropertySlider";
import Mechanice from "./Mechanice";
import HomeBuild from "./HomeBuild";
import HomeBuild2 from "./HomeBuild2";
import EditorialCard from "./Advocate";
import Sand from "./Sand";
import Contract from "./Contract";

import Blank from "./Blank";
import Blank2 from "./Blank2";
import Blank3 from "./Blank3";

import Mainslider from "./Mainslider";

const HomeMain = () => {
  return (
    <>
      <Mainslider></Mainslider>
     
      {/* <Slidersec /> */}
      <PropertySlider />
      <Mechanice />
      <HomeBuild />
      <HomeBuild2 />
      <EditorialCard />
      <Sand />
      <Contract />
      <Blank3 />
      <Blank />
      <Mechanice />
      <Blank2 />
    </>
  );
};

export default HomeMain;

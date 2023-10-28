import React, { useContext, useState } from "react";

import Card from "../Properties_card/Card";
import Home_Coursal from "./HomeCoursal";

import CategoryPropertyData from "../../../../Data/Propertiesdata";
import { MyContext } from "../../../../Context/createcontext";

const Home_Properties_page = () => {
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedDateRange, setSelectedDateRange] = useState("");
  const { selectedCategory } = useContext(MyContext);

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const handleDateRangeChange = (event) => {
    setSelectedDateRange(event.target.value);
  };

  const filteredData = CategoryPropertyData.filter((property) => {
    const priceMatches =
      selectedPriceRange === "" ||
      property.price === selectedPriceRange.replace(/,/g, "");

    const dateMatches =
      selectedDateRange === "" || property.date === selectedDateRange;

    const categoryMatches =
      selectedCategory === "" || property.category === selectedCategory;

    return priceMatches && dateMatches && categoryMatches;
  });
  return (
    <>
      <Home_Coursal></Home_Coursal>

      <div className="w-full  py-3 !bg-whitesmoke ">
        <div className="w-full md:px-[100px] px-[10px] py-1">
          {/* header  */}
          <div className="w-full ">
            <h3 className="font-semibold text-[1.2rem]"> All Properties </h3>
            <div className="w-full flex gap-3 flex-wrap text-[#858585]">
              <span> Country: India </span>
              <span> State: Assam </span>
              <span> District : Dibrugarh </span>
            </div>
          </div>
          {/* search and filter option */}
          <div className="w-full pt-3 pb-2 flex justify-between flex-wrap ">
            <div className="md:w-[40%] w-full border-[1.2px] overflow-hidden flex rounded-sm border-[#2e31e6] items-center">
              <input
                type="text"
                placeholder="Search "
                className="w-full py-2 px-1 outline-none "
              />
              <span className="material-symbols-outlined pr-2 text-[#2810ff]">
                search
              </span>
            </div>

            <div className="flex justify-end items-center gap-3">
              <select
                name=""
                id=""
                className="px-3 py-2 border-[1.2px] rounded-sm cursor-pointer border-[#3235e9] outline-none"
                onChange={handleDateRangeChange}
              >
                <option value="">Date by</option>
                <option value="more 2 month">More than 2 months</option>
                <option value="1 months">1 month</option>
                <option value="15 day">15 days</option>
              </select>
              <select
                name=""
                id=""
                className="px-3 py-2 border-[1.2px] rounded-sm cursor-pointer border-[#413ee9] outline-none"
                value={selectedPriceRange}
                onChange={handlePriceRangeChange}
              >
                <option value="">Price Range</option>
                <option value="150000">1,50,000</option>
                <option value="1000000">10,00,000</option>
              </select>
            </div>
          </div>

          <div className="w-full flex justify-end">
            <button
              className="text-[#1028ff] font-semibold text-[1rem]"
              onClick={() => setMore((prev) => !prev)}
            >
              More Filter Option
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {filteredData.map((val, id) => {
          return (
            <>
              <Card {...val}></Card>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home_Properties_page;

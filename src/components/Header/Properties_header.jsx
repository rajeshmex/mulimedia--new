import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { MyContext } from "../../Context/createcontext";

const PropertyNavbar = () => {
  const propertyTypes = ["shop", "flat", "building", "Building"];
  const { selectedCategory, handleCategoryChange } = useContext(MyContext);

  // Handle category selection
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    handleCategoryChange(selectedValue); // Call the handleCategoryChange function with the selected value
  };

  return (
    <>
      <div className="w-full z-50 flex items-center justify-between sticky top-0 bg-white shadow-lg p-3 px-6">
        <NavLink to={"/"}>
          {" "}
          <div className="ml-5">Logo</div>{" "}
        </NavLink>
        <div className="flex md gap-2 items-center">
          <div className="flex gap-2 items-center">
            <select
              id="category"
              name="category"
              onChange={handleSelectChange}
              value={selectedCategory}
              className="w-full p-2 mt-1 text-sm rounded-lg"
            >
              <option value="">Select Rent Property</option>
              {propertyTypes.map((val, id) => (
                <option key={id} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
          <span className="flex px-3">{/* <NotificationPopOver /> */}</span>
        </div>
        <div className="flex md gap-4 gap-3 items-center">
          <NavLink
            to={"/login"}
            className="border-2 rounded-full border-primary p-1 px-5 flex flex-col"
          >
            <span> Seller-Point </span>
          </NavLink>
          <NavLink
            to={"/login"}
            className="border-2 rounded-full md px-6 px-3 md py-1 py-0 border-pink-300 flex items-center gap-2"
          >
            <AiOutlineUser />
            <span> Login </span>
          </NavLink>
          <NavLink
            to={"/"}
            className="md py-2 md px-3 px-1 py-0 md flex hidden items-center gap-2 hover-text-[#2dd4bf] duration-200 transition-colors ease-out"
          >
            <span> Home </span>
          </NavLink>
          <NavLink
            to={"/"}
            className="md py-2 md px-3 px-1 py-0 md flex hidden items-center gap-2 hover-text-[#2dd4bf] duration-200 transition-colors ease-out"
          >
            <div className="flex mr-5">
              <AiOutlineShoppingCart size={30} />
              <span className="block border text-center rounded-full bg-red-400 absolute top-0 px-1 pl-2 right-5">
                0
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default PropertyNavbar;

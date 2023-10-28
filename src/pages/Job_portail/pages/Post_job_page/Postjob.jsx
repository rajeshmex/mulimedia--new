import React, { useContext, useEffect } from "react";
import { MyContext } from "../../../../Context/createcontext";
import PostJobheader from "./PostJobheader";
import { Link, Outlet } from "react-router-dom";
import cities from "./../../../../Data/cities.json";
import Main from "./Forms/Mainform";
function Post_job() {
  console.log(cities);

  const { user } = useContext(MyContext);
  return (
    <>
      <PostJobheader />
      <Outlet></Outlet>
    </>
  );
}

export default Post_job;

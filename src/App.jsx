import React, { useContext } from "react";
import Jobportailpage from "./pages/Job_portail/pages/Home/Job_portail_page";
import { Route, Routes, useLocation } from "react-router-dom";
import Post_job from "./pages/Job_portail/pages/Post_job_page/Postjob";
import Jobportailheader from "./components/Header/Job_portail_header";
import Footer from "./components/Footer/Footer";
import Signin from "./pages/Login/Signin";
import Signup from "./pages/Login/Signup";
import ProtectedRouter from "./pages/Job_portail/pages/Post_job_page/ProtextedRouter";
import { MyContext } from "./Context/createcontext";
import Error from "./pages/Error/Error";
import Paymentform from "./pages/Job_portail/pages/Post_job_page/Forms/Paymentform";
import Findjob from "./pages/Job_portail/pages/Findjob/Findjob";
import Contact from "./pages/Contact/Contact";
import Apply from "./pages/Job_portail/pages/Applyfrom/Apply";
import Main from "./pages/Job_portail/pages/Post_job_page/Forms/Mainform";
import Success from "./pages/Job_portail/pages/Post_job_page/Forms/Success";
import PropertyNavbar from "./components/Header/Properties_header";
import Home_Properties_page from "./pages/Properties/Properties_pages/Home/Home_properties";
import Details from "./pages/Properties/Properties_pages/Properties_details/Details";
function App() {
  const { user } = useContext(MyContext);
  const Location = useLocation();
  const currentPath = Location.pathname;
  console.log(currentPath);

  const renderHeader = () => {
    if (currentPath.includes("//property")) {
      return <Jobportailheader></Jobportailheader>;
    } else if (currentPath.includes("/property")) {
      return <PropertyNavbar></PropertyNavbar>;
    } else {
      return <Jobportailheader></Jobportailheader>;
    }
  };

  return (
    <>
      {renderHeader()}

      <Routes>
        <Route path="/" element={<Jobportailpage />} />

        <Route
          path="/post_job"
          element={
            <ProtectedRouter user={user}>
              <Post_job />
            </ProtectedRouter>
          }
        >
          <Route index path="" element={<Main />}></Route>
          <Route path="payment" element={<Paymentform />}></Route>
          <Route path="success" element={<Success />}></Route>
        </Route>

        {/* ====== nesting routing here of job post =============== */}

        {/* <Route path="/post" element={<Post_job></Post_job>}>
          <Route index path="" element={<Main />}></Route>
          <Route path="payment" element={<Paymentform />}></Route>
          <Route path="success" element={<Success />}></Route>
        </Route> */}
        {/* ======= end ====== */}

        <Route path="/find" element={<Findjob></Findjob>}></Route>
        <Route path="/apply" element={<Apply></Apply>}></Route>

        <Route
          path="/property"
          element={<Home_Properties_page></Home_Properties_page>}
        ></Route>
        <Route path="/property/:id" element={<Details></Details>}></Route>

        <Route path="/login" element={<Signin></Signin>}></Route>
        <Route path="/sign" element={<Signup></Signup>}></Route>

        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;

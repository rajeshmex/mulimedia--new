import { Route, Routes, useLocation } from "react-router-dom";
import { useContext } from "react";
import {
  Footer,
  SubMenuHeader,
  MainHeader,
  PropertyNavbar,
  Jobportailheader,
} from "./components";
import {
  Contact,
  Error,
  Jobportailpage,
  HomeMain,
  Signin,
  Signup,
  Paymentform,
  Success,
  Main,
  Home_Properties_page,
  Details,
  Apply,
  Post_job,
  Findjob,
  ProtectedRouter,
} from "./pages";
import { MyContext } from "./Context/createcontext";

function App() {
  const { user } = useContext(MyContext);
  const Location = useLocation();
  const currentPath = Location.pathname;

  const renderHeader = () => {
    if (currentPath === "/") {
      return (
        <div>
          <MainHeader></MainHeader>
          <SubMenuHeader></SubMenuHeader>
        </div>
      );
    } else if (currentPath.includes("/property")) {
      return <PropertyNavbar></PropertyNavbar>;
    } else if (
      currentPath.includes("/job") ||
      currentPath.includes("/post_job") ||
      currentPath.includes("/find") ||
      currentPath.includes("/login") ||
      currentPath.includes("/sign")
    ) {
      return <Jobportailheader></Jobportailheader>;
    } else {
      return;
    }
  };
  return (
    <>
      {renderHeader()}

      <Routes>
        <Route path="/" element={<HomeMain></HomeMain>}></Route>
        <Route path="/job" element={<Jobportailpage />} />
        {/* ====== nesting routing here of job post =============== */}
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

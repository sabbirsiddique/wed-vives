import { Outlet } from "react-router-dom";
import Navbar from "../components/header/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <div className="sm:max-w-screen-sm sm:mx-auto md:max-w-screen-md md:mx-auto lg:max-w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;

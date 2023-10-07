import { Outlet } from "react-router-dom";
import Navbar from "../components/header/navbar/Navbar";

const Root = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
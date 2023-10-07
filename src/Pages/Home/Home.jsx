import { useLoaderData } from "react-router-dom";
import Slider from "../../components/header/slider/Slider";
import Services from "../../components/services/Services";

const Home = () => {


    const services = useLoaderData();

    return (
        <div>
            <div className="sm:max-w-screen-sm sm:mx-auto md:max-w-screen-md md:mx-auto lg:max-w-full">
            <Slider></Slider>
            </div>

            <Services services = {services}></Services>
            
        </div>
    );
};

export default Home;
import { useLoaderData } from "react-router-dom";
import Slider from "../../components/header/slider/Slider";
import Services from "../../components/services/Services";
import Stat from "../../components/stat/Stat";
import Tools from "../../components/tools/Tools";

const Home = () => {


    const services = useLoaderData();

    return (
        <div>
            <div className="sm:max-w-screen-sm sm:mx-auto md:max-w-screen-md md:mx-auto lg:max-w-full">
            <Slider></Slider>
            </div>

            <Services services = {services}></Services>

            <div className="flex justify-center items-center mb-20 mt-6">
            <Stat></Stat>
            </div>
            

            <Tools></Tools>
        </div>
    );
};

export default Home;
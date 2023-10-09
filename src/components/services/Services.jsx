/* eslint-disable react/prop-types */
import ServicesCard from "./ServicesCard";

const Services = ({services}) => {
    return (
        <div>
            <h1 className="text-3xl text-center mt-12 font-bold font-rubik">Our Services</h1>


            <div className="grid grid-cols-1 mx-auto sm:max-w-screen-sm md:max-w-screen-md md:grid-cols-2 lg:max-w-screen-2xl lg:grid-cols-3 gap-8 mb-12 mt-12 lg:gap-12">
            {
                services?.map(service=><ServicesCard key={service.id} service={service}></ServicesCard>)
            }
            </div>
        </div>
    );
};

export default Services;
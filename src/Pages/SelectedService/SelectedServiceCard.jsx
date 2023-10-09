/* eslint-disable react/prop-types */

const SelectedServiceCard = ({ selectedService }) => {
  const { service_name, description, description_img } = selectedService || {};

  return (
    <div className="h-screen font-rubik flex flex-col justify-center items-center w-[870px] mx-auto">
      <h1 className="mt-10 mb-8 text-4xl font-extrabold">{service_name}</h1>
      <img src={description_img} />
      <h3 className="mt-10 mb-8 text-3xl font-extrabold">{service_name}</h3>
      <p className="text-left leading-6 text-lg mb-10 text-gray-500">{description} </p>
    </div>
  );
};

export default SelectedServiceCard;

/* eslint-disable react/prop-types */

const SelectedServiceCard = ({ selectedService }) => {
  const { service_name, description, description_img } = selectedService || {};

  return (
    <div className="h-screen flex flex-col justify-center items-center w-[870px] mx-auto">
      <h1>{service_name}</h1>
      <img src={description_img} />
      <h3>{service_name}</h3>
      <p className="text-left">{description} </p>
    </div>
  );
};

export default SelectedServiceCard;

/* eslint-disable react/prop-types */
const ServicesCard = ({ service }) => {
  const { id, service_img, service_name, short_description } = service || {};

  return (
    <div className="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 rounded-md ">
      <div className="card shadow-xl">
        <figure>
          <img src={service_img} className="rounded-lg pt-6" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">{service_name}</h2>
          <p className="text-center">{short_description}</p>
          <div className="card-actions justify-center">
            <button className="btn text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;

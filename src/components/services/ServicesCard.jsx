import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();
// Aos.init({
//   duration: 1500,
// });

/* eslint-disable react/prop-types */
const ServicesCard = ({ service }) => {
  const { id, service_img, price, service_name, short_description } =
    service || {};

  return (
    <div className="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 rounded-md ">
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-anchor-placement="top-bottom"
        className="card shadow-xl"
      >
        <figure>
          <img src={service_img} className="rounded-lg pt-6" />
        </figure>
        <div className="card-body">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1300"
          >
            <h2 className="text-2xl font-bold text-center">{service_name}</h2>
            <p className="text-center">{short_description}</p>
            <p className="text-center">${price}</p>
          </div>
          <div className="card-actions justify-center">
            <Link to={`/services/${id}`}>
              <button
                data-aos="fade-left"
                data-aos-duration="1500"
                className="btn text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"
              >
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;

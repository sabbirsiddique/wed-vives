import Aos from "aos";
import 'aos/dist/aos.css'; 

Aos.init();
Aos.init({
    duration: 1500,
  });

const Stat = () => {
  return (
    <div data-aos="zoom-in-up"
    data-aos-anchor-placement="top-bottom">
      <h2 className="text-center mt-8 mb-5">We Belive In Hardwork</h2>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Total Booked</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Users</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;

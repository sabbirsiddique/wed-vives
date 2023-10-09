import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();
Aos.init({
      duration: 5000,
    });

const About = () => {
  return (
    <div className="max-w-full h-screen mx-auto bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100">
      <div className="max-w-screen-2xl flex justify-center items-center mx-auto p-5">
        <div className="flex flex-col justify-center w-[748px] items-center">
          <h1 className="text-6xl font-extrabold font-rubik mt-20">
            <span className="text-[#ee514b]">About</span>
            <span className="text-[#F9B232]"> Us!</span>
          </h1>
          <p className="mt-6 text-center font-rubik font-medium">
            Welcome to our wedding event management website, where dreams come
            to life. With years of experience and a passion for creating
            unforgettable moments, we are your dedicated partner in crafting the
            perfect wedding celebration.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center font-rubik gap-40 mt-10">
        <div data-aos="fade-up">
          <h1 className="text-7xl mb-6 font-bold">
            Planner for Your <br /> Perfect Wedding
          </h1>
          <p className="mb-6">
          A comprehensive wedding planner to help you <br/> organize and execute your dream wedding flawlessly.
          </p>
          <ol className="">
            <li className="list-disc text-lg font-semibold">Intimate beach ceremony with close family.</li>
            <li className="list-disc text-lg font-semibold">Rustic barn wedding with vintage charm.</li>
            <li className="list-disc text-lg font-semibold">Elegant city soirée at a luxury venue.</li>
          </ol>
        </div>
        <div className="hover:scale-105 transition duration-700">
          <img src="https://i.ibb.co/1mxGTHK/about-banner-img.png"/>
        </div>
      </div>
    </div>
  );
};

export default About;

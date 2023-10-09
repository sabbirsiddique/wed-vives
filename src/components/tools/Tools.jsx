import Aos from "aos";
import 'aos/dist/aos.css'; 

Aos.init();
Aos.init({
    duration: 3000,
  });



const Tools = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-2xl font-rubik">TOOLS</h1>
            <div data-aos="fade-up" className="grid grid-cols-1 mx-auto sm:max-w-screen-sm md:max-w-screen-md md:grid-cols-2 lg:max-w-screen-2xl lg:grid-cols-3 gap-8 mb-12 mt-12 text-center">
            <div className="shadow-xl bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 justify-center items-center flex flex-col py-8">
                <img src="https://i.ibb.co/HtcNXM0/magnifying-glass.png" className="w-[50px] h-[50px]"/>
                <p>Search</p>
            </div>
            <div className="shadow-xl bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 justify-center items-center flex flex-col">
                <img src="https://i.ibb.co/wM9RmKJ/gear.png" className="w-[50px] h-[50px]"/>
                <p>Manager Tools</p>
            </div>
            <div className="shadow-xl bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 justify-center items-center flex flex-col">
                <img src="https://i.ibb.co/txfYXRW/guest-list.png" className="w-[50px] h-[50px]"/>
                <p>Guestlist</p>
            </div>
            <div className="shadow-xl bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 justify-center items-center flex flex-col py-8">
                <img src="https://i.ibb.co/GsfZvJd/money-bag.png" className="w-[50px] h-[50px]"/>
                <p>Budget</p>
            </div>
            <div className="shadow-xl bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 justify-center items-center flex flex-col">
                <img src="https://i.ibb.co/F5mfvzB/woman.png" className="w-[50px] h-[50px]"/>
                <p>Shortlist</p>
            </div>
            <div className="shadow-xl bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 justify-center items-center flex flex-col">
                <img src="https://i.ibb.co/0M3Dtkn/advice.png" className="w-[50px] h-[50px]"/>
                <p>Advice</p>
            </div>
        </div>
        </div>
    );
};

export default Tools;
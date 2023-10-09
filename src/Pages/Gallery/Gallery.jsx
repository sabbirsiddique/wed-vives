const Gallery = () => {
  return (
    <div>

        <h1 className="text-4xl font-rubik font-bold text-center mb-8 mt-8">
        <span className="text-[#ee514b]">Our</span>
            <span className="text-[#F9B232]"> Collection</span>
             </h1>
      <div className="grid grid-cols-1 mx-auto sm:max-w-screen-sm md:max-w-screen-md md:grid-cols-2 lg:max-w-screen-2xl lg:grid-cols-2 mb-12 mt-12 lg:gap-12 ">
        <div className="flex justify-center items-center">
          <img
            src="https://i.ibb.co/vVYx28q/pexels-muhamad-faizal-awal-5166761.jpg" className="rounded-xl"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center">
          <img src="https://i.ibb.co/4251CsX/pexels-jeremy-wong-1043902.jpg" className="rounded-xl" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src="https://i.ibb.co/FVCVXBS/pexels-quang-nguyen-vinh-4119959.jpg" className="rounded-xl" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src="https://i.ibb.co/d0kDw6Q/pexels-emma-bauso-3585798.jpg" className="rounded-xl" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src="https://i.ibb.co/JpDPKdj/pexels-julia-avamotive-1094995.jpg" className="rounded-xl" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src="https://i.ibb.co/hcNKNtv/pexels-3715083.jpg" className="rounded-xl" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src="https://i.ibb.co/WkHtDmh/pexels-3715087.jpg" className="rounded-xl" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src="https://i.ibb.co/V3yTh80/pexels-pham-hoang-kha-3785644-3.jpg" className="rounded-xl" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

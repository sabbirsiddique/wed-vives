
const Slider = () => {
  return (
    <div>
      <div className="carousel max-w-screen-2xl rounded-xl mx-auto flex bg-cover h-[800px]"> 
      <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/1q5QdLz/pexels-edward-eyer-1045541.jpg" className="w-full" />
    <div className="absolute inset-0 flex flex-col items-center justify-center">
    <h1>hello</h1>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/NrXyPfJ/pexels-joel-paim-2291462.jpg" className="w-full" />
    <div className="absolute inset-0 flex flex-col items-center justify-center">
    <h1>hello</h1>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/hyyHn6S/pexels-jonathan-borba-9714788.jpg" className="w-full" />
    <div className="absolute inset-0 flex flex-col items-center justify-center">
    <h1>hello</h1>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/1m5HvpV/pexels-viresh-studio-2060239.jpg" className="w-full" />
    <div className="absolute inset-0 flex flex-col items-center justify-center">
    <h1>hello</h1>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
  );
};

export default Slider;

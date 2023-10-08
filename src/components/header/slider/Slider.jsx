
const Slider = () => {
  return (
    <div>
      <div className="carousel w-full"> 
      <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/6Jzb52h/pexels-asad-photo-maldives-169196.jpg" className="w-full h-[800px] bg-center bg-no-repeat bg-cover" />
    <div className="absolute inset-0 flex flex-col items-center justify-center">
    <h1>hello</h1>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/sCV0MPD/pexels-antony-trivet-13644808.jpg" className="w-full h-[800px] bg-center bg-no-repeat bg-cover" />
    <div className="absolute inset-0 flex flex-col items-center justify-center">
    <h1>hello</h1>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/hyyHn6S/pexels-jonathan-borba-9714788.jpg" className="w-full h-[800px] bg-center bg-no-repeat bg-cover" />
    <div className="absolute inset-0 flex flex-col items-center justify-center">
    <h1>hello</h1>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/drhZ28c/pexels-viresh-studio-1444442.jpg" className="w-full h-[800px] bg-center bg-no-repeat bg-cover" />
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

import React from 'react';
 
const Banner = () => {
    return (
      <div className="carousel max-w-screen-xl h-screen mt-52 lg:mt-24">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://mobyshop.com.sg/media/wysiwyg/home/rog6-batman-block.png" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://www.techicy.com/wp-content/uploads/2021/09/Second-Hand-Phones.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xAPnjRRj1_Lx30P9OKf6ec5CCpAwoLYcoA&usqp=CAU" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1u6thHCnqOyC6QFoimtOXoi3JwkiDC1bDVaGgucIjPCVf8qyKsRJXS-uvK2_qBx37k4A&usqp=CAU" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
    );
};

export default Banner;
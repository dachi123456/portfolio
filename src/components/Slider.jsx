import React, { useState } from 'react'
import calculatorImg from '../workPhotos/calculator.png'
import ecommerceImg from '../workPhotos/ecommerce.png'
import memoryImg from '../workPhotos/memoryGame.png'
import movieImg from '../workPhotos/movie.png'
import todoImg from '../workPhotos/todo.png'
import weatherImg from '../workPhotos/weather.png'
import WorkCard from './Work/WorkCard'
import arrow from '../icons/arrow_forward_white_24dp.svg'
import './slider.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const WorksData = [
  {img: calculatorImg, liveUrl: 'https://zesty-creponne-d9e567.netlify.app/', codeUrl: 'https://github.com/dachi123456/calculator'},
  {img: ecommerceImg, liveUrl: 'https://e-ccomerce-flowers.netlify.app/', codeUrl: 'https://github.com/dachi123456/e-commerce'},
  {img: memoryImg, liveUrl: 'https://dachi123456.github.io/memoryGame.github.io/', codeUrl: 'https://github.com/dachi123456/memoryGame.github.io'},
  {img: movieImg, liveUrl: 'https://candid-gingersnap-caf949.netlify.app/', codeUrl: 'https://github.com/dachi123456/movieListApi'},
  {img: todoImg, liveUrl: 'https://amazing-stroopwafel-760627.netlify.app/', codeUrl: 'https://github.com/dachi123456/todoAplication/tree/main/src'},
  {img: weatherImg, liveUrl: 'https://teal-palmier-ffcbd8.netlify.app/', codeUrl: 'https://github.com/dachi123456/weatherApi'},
]

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + WorksData.length) % WorksData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % WorksData.length);
  };

  return (
    <div className="slider-container">
      <img src={arrow} alt="Left Arrow" className="left-arrow" onClick={handlePrev} />
      <div className="carousel-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        
        {WorksData.map((proj, index) => (
          <WorkCard key={index} img={proj.img} codeUrl={proj.codeUrl} liveUrl={proj.liveUrl} />
        ))}
      </div>
      <img src={arrow} alt="Right Arrow" className="right-arrow" onClick={handleNext} />
    </div>
  );
};

export default Slider;


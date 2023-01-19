import React, { useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Slider.scss';

const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide (currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide (currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  const data = [
    "https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1600&dpr=1",
    "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1600&dpr=1",
    "https://images.pexels.com/photos/3772506/pexels-photo-3772506.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1600&dpr=1"
  ]

  return (
    <div className='slider'>
      <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon">
          <KeyboardArrowLeftIcon onClick={prevSlide} />
        </div>
        <div className="icon">
          <KeyboardArrowRightIcon onClick={nextSlide} />
        </div>
      </div>
    </div>
  )
}

export default Slider
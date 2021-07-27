// App.js
import React from 'react';
// import './ImageSlider.css';

import Slider from "react-slick";
import slidesData from "./slidesData"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ImageCard from './ImageCard';
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";

function ImageSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: (
        <div>
          <div className="next-slick-arrow"> <NextArrow/> </div>
        </div>
      ),
      prevArrow: (
        <div>
          <div className="prev-slick-arrow"> <PreviousArrow/> </div>
        </div>
      )
    
  };


  return (    
        <Slider {...settings}>

          {slidesData.map((slide) =>

          <ImageCard
            key = {slide.id}
            Recipetitle = {slide.title}
            recipeimage = {slide.img}
            Recipelabel = {slide.label}
          />
          )}

        </Slider>

  );
}

export default ImageSlider;

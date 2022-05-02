import React from 'react'
import './ItemDetail.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card1 } from './CardItem/Card1';
import { Card2 } from './CardItem/Card2';
import { Card3 } from './CardItem/Card3';
import { Card4 } from './CardItem/Card4';
import UnderCar from './UnderCar.png'
import OffRoad from './OffRoad.png'

export const ItemDetail = ({name, photo}) => {

    var settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }
  return (
      <>
    <div>
        <section className='introContainer'>
            <img src={photo} alt={name} className='introImg'/>
            <div className='carIntro'>
                <h3>{name}</h3>
                <h2>Preparada para cualquier desafio</h2>
                <p>Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet.   
                </p>
            </div>
        </section>

        <Slider {...settings} className='carouselContainer'>
            
            <Card1/>
            
            <Card2/>  
            
            <Card3/>
           
            <Card4/>

            <Card1/>
            
            <Card2/>  
        
            <Card3/>
       
            <Card4/>
            
        </Slider>

        <div className='dataContainer'>
            <div className='carData1'>
                <div className='carText'>
                    <h3>Título de 20 px</h3>
                    <p>Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet.
                    </p>
                </div>
                <img src={UnderCar}/>
            </div>

            <section className='carData2'>
            <img src={OffRoad}/>
                <div className='carText'>
                    <h3>Título de 20 px</h3>
                    <p>Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet.
                    </p>
                </div>
            </section>
        </div>

    </div>
    </>
  )
}

import React, { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const ClientSlider = ({cakeClientSliderStaticData}) => {
    const [slides, setSlides] = useState(0);

    const setSlidesPerview = () => {
      setSlides(
        window.innerWidth <= 320
        ? 3
        : window.innerWidth <= 767
        ? 3
        : window.innerWidth <=  992
        ? 4
        : window.innerWidth >  992
        ? 5
        : 0
      );
    };
  
    useEffect(() => {
      //Initially set the amount of slides on page load
      setSlidesPerview();
      // Add the event listener on component mount
      window.addEventListener("resize", setSlidesPerview);
  
      // Remove the listener when component unmounts
      return () => {
        window.removeEventListener("resize", setSlidesPerview);
      };
    }, []);
  return (
    <div className="clients-section">
        <div className="container">
            <Swiper 
            slidesPerView={slides}
            spaceBetween={80}
            autoplay={true}
            modules={[Autoplay]}
            className="clients"
            >
              {cakeClientSliderStaticData.map((item)=>(
                <SwiperSlide key={item.id}>
                  <img src={item.imgSrc} alt="Client logo"/>
                </SwiperSlide>
              ))}
                
                
            </Swiper>
        </div>
    </div>
  )
}

export default ClientSlider
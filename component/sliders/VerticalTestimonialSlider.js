import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick';
const VerticalTestimonialSlider = ({cakeSliderStaticData}) => {
    const sliderRef = useRef(null);
    const imgNavRef = useRef(null);
    
    useEffect(() => {
        const sliderSettings = {
            slidesToShow: 1,
            vertical: true,
            verticalSwiping: true,
            asNavFor: imgNavRef.current,
          };
          setSliderSetting(sliderSettings)
    },[])
    const [sliderSettings,setSliderSetting] = useState({
      slidesToShow: 1,
      vertical: true,
      verticalSwiping: true,
      asNavFor: imgNavRef.current,
    });
  
    const testimonialImagesSettings = {
        slidesToShow:1,
        draggable: false,
        arrows: false,
        fade: true,
        asNavFor: sliderRef.current,
    };
    
  return (
    <section className="fz-3-testimonial-section">
        <div className="container">
            <div className="row gy-5 justify-content-center align-items-center">
                <div className="col-lg-6 position-relative">
                    <Slider
                    {...sliderSettings}
                    ref={sliderRef}
                    className="fz-3-testimonial-slider-container"
                    id="fz-3-testimonial-slider"
                    >     
                        {cakeSliderStaticData.slice(0,3).map((item) => (
                            <div className="fz-3-single-testimony" key={item.id}>
                                <span className="quote-icon"><i className="fa-solid fa-quote-right"></i></span>
                                <p className="fz-3-single-testimony-txt">{item.text}</p>

                                <div className="fz-3-rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>

                                <div className="fz-3-reviewer">
                                    <div className="fz-3-reviewer-img">
                                        <img src={item.imgSrc} alt={item.name}/>
                                    </div>

                                    <div className="fz-3-reviewer-info">
                                        <h6 className="fz-3-reviewer-name">{item.name}</h6>
                                        <span className="fz-3-reviewer-label">{item.position}</span>
                                    </div>
                                </div>
                            </div> 
                        ))}                       
                        
                    </Slider>

                    <div className="fz-3-testimonial-slider-nav">
                        <button type="button" onClick={() => sliderRef.current.slickPrev()}>
                        <i className="fa-regular fa-angle-up"></i>
                        </button>
                        <button type="button" onClick={() => sliderRef.current.slickNext()}>
                        <i className="fa-regular fa-angle-down"></i>
                        </button>
                    </div>
                </div>

                <div className="col-lg-6">
                    <Slider {...testimonialImagesSettings} ref={imgNavRef} className="testimonial-img-slider"> 
                        {cakeSliderStaticData.slice(-3).map((item)=>(
                            <img src={item.imgSrc} alt="People Having cake" key={item.id}/>
                        ))}                               
                    </Slider>
                </div>
            </div>
        </div>
    </section>
  )
}

export default VerticalTestimonialSlider
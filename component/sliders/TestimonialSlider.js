import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';

const TestimonialSlider = ({testimonialStaticData}) => {
    const swiperRef = useRef(null);

    const goNext = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    };
  
    const goPrev = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slidePrev();
      }
    }
  return (
    <section className="fz-2-testimonial-section">
            <div className="container">
                <div className="fz-2-section-heading">
                    <h2 className="fz-section-title">Reviews From Customer</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-7 col-9 col-xxs-12 position-relative">
                        <div 
                        className="fz-testimonial-slider-nav" 
                         >
                            <button 
                            type="button" 
                            role="presentation" 
                            className="owl-prev" 
                            onClick={goPrev}
                            >
                                <i className="fa-solid fa-angle-left"></i>
                            </button>
                            <button 
                            type="button" 
                            role="presentation" 
                            className="owl-next" 
                            onClick={goNext}
                            >
                                <i className="fa-solid fa-angle-right"></i>
                            </button>
                        </div>
                        <Swiper 
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.owl-prev',
                            nextEl: '.owl-next',
                        }}
                        pagination= {{
                            el: '.fz-testimonial-slider-dots',
                            clickable: true,
                            bulletClass:"owl-dot",
                            bulletActiveClass:"active"
                        }}
                        modules={[Navigation,Pagination]}
                        className="fz-testimonial-slider-container owl-carousel"
                        >
                            {testimonialStaticData.map((item) => (
                             <SwiperSlide className="fz-single-testimony" key={item.id}>
                                <span className="quote-icon"><i className="fa-solid fa-quote-right"></i></span>
                                <p className="fz-single-testimony-txt">{item.text}</p>

                                <div className="fz-reviewer home-3-image-slider">
                                    <div className="fz-reviewer-img">
                                        <img src={item.imgSrc} alt={item.name}/>
                                    </div>

                                    <div className="fz-reviewer-info">
                                        <div className="fz-rating">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <h6 className="fz-reviewer-name">{item.name}</h6>
                                        <span className="fz-reviewer-label">{item.positiob}</span>
                                    </div>
                                </div>
                            </SwiperSlide>   
                            ))}
                            
                        </Swiper>
                        <div className="fz-testimonial-slider-dots">
                            <button role="button" className="owl-dot">
                                <span></span>
                            </button>
                            <button role="button" className="owl-dot">
                                <span></span>
                            </button>
                            <button role="button" className="owl-dot">
                                <span></span>
                            </button>
                        </div>                    
                    </div>
                </div>
            </div>
        </section>
  )
}

export default TestimonialSlider
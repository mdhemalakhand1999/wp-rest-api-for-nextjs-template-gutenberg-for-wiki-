import React, { useContext, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import VideoModal from '../modal/VideoModal';
import Link from 'next/link';
import { FarzaaContext } from '@/context/FarzaaContext';

const BannerSection = ({ firstBannerData }) => {
  const [bannerDataState, setbannerDataState] = useState();
  const {handleVideoShow} = useContext(FarzaaContext)
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
  };
  useEffect(() => {
    async function fetchBannerData() {
      const response = await fetch('http://localhost/wp/gutenberg-for-wiki//wp-json/wp/v2/redux-data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const bannerData  = await response.json();
      const {
        banner_title,
        banner_count_number,
        banner_play_btn_link,
        banner_btn_text,
        banner_btn_link,
        banner_hero_image,
        banner_rotate_image,
      } = bannerData.all_customizer_data;
       // Set the state with the extracted values
      setbannerDataState({
        title: banner_title,
        banner_count_number: banner_count_number,
        banner_play_btn_link: banner_play_btn_link,
        banner_btn_text: banner_btn_text, // Corrected from the duplicate key
        banner_btn_link: banner_btn_link,
        banner_hero_image: banner_hero_image,
        banner_rotate_image: banner_rotate_image,
      });
    }
    fetchBannerData()
  }, [])
  const result = bannerDataState && Object.values(bannerDataState).reduce((acc, arr) => {
      arr && arr.forEach((el, i) => {
          acc[i] = (acc[i] || []).concat(el);
      });
      return acc;
  }, [])
  return (
    <section className="fz-1-banner-section">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        className="fz-1-banner-slider owl-carousel"
        autoplay={{ delay: 3000 }}
        navigation={{
          prevEl: 'owl-prev',
          nextEl: 'owl-next',
        }}
        modules={[Navigation, Autoplay]}
      >
        {result && result.map((item) => {
          function getYouTubeVideoId(url) {
            // Regular expression to match YouTube video URLs
            const regex = /[?&]v=([^?]+)/;
            const match = url.match(regex);
          
            if (match && match[1]) {
              return match[1];
            } else {
              // If the URL doesn't match the expected format
              return null;
            }
          }
          
          // Example usage:
          const videoURL = item && item[2];
          const videoId = videoURL && getYouTubeVideoId(videoURL);
          return(
              <SwiperSlide className="fz-1-banner-single-slide">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-lg-6 col-md-7">
                            <div className="fz-1-banner-txt">
                                {item && item[0] && <h1 className="text5">{item[0]}</h1>}
      
                                <div className="fz-1-banner-txt__btns">
                                {videoId &&  
                                    <button className="fz-1-banner-vid-btn" data-video-id={videoId} onClick={handleVideoShow}>
                                        <i className="fa-solid fa-play"></i>
                                    </button>
                                  }
      
                                    {item && item[3] && <Link href={item && item[4] && item[4]} className="fz-1-banner-btn">{item[3]} <i className="fa-light fa-arrow-up-right"></i></Link>}
                                </div>
                            </div>
                        </div>
      
                        <div className="col-lg-6 col-md-5 align-self-end">
                            <div className="fz-1-banner-img-container">
                                {item && item[1] && <div className="sticker-container">
                                    {item && item[6]?.url && <><img src={item[6]?.url} alt="Sticker" className="sticker" /><span>{item[1]}</span></>}
                                </div>}
      
                                {item && item[5]?.url && <div className="fz-1-banner-img">
                                    <img src={item[5]?.url} alt="Product Images"/>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide> 
          )
        })}
      </Swiper>
      <div className="owl-nav">
        <button type="button" role="presentation" className="owl-prev" onClick={goPrev}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button type="button" role="presentation" className="owl-next" onClick={goNext}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
      <VideoModal />
    </section>
  );
};

export default BannerSection;

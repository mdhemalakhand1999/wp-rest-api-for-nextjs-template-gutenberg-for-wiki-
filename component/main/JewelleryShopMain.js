import React from 'react'
import BannerSection2 from '../banner/BannerSection2'
import CategorySection2 from '../category/CategorySection2'
import LuxurySection from '../product/LuxurySection'
import SpecialOfferSection from '../offer/SpecialOfferSection'
import HotDealSection from '../offer/HotDealSection'
import TestimonialSlider from '../sliders/TestimonialSlider'
import BlogSection2 from '../blog/BlogSection2'
import GallerySection2 from '../gallery/GallerySection2'

const JewelleryShopMain = ({
  ornamentsData,
  testimonialStaticData,
  blogStaticData,
  jewelleryGalleryStaticData,
}) => {
  return (
    <main>
        <BannerSection2/>
        <CategorySection2/>
        <LuxurySection ornamentsData={ornamentsData}/>
        <SpecialOfferSection/>
        <HotDealSection ornamentsData={ornamentsData}/>
        <TestimonialSlider testimonialStaticData={testimonialStaticData}/>
        <BlogSection2 blogStaticData={blogStaticData}/>
        <GallerySection2 jewelleryGalleryStaticData={jewelleryGalleryStaticData}/>
    </main>
  )
}

export default JewelleryShopMain
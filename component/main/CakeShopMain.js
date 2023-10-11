import React from 'react'
import CategorySection3 from '../category/CategorySection3'
import LayerCakeSlider from '../sliders/LayerCakeSlider'
import OfferSection2 from '../offer/OfferSection2'
import PoundCakeSlider from '../sliders/PoundCakeSlider'
import VideoSection from '../video/VideoSection'
import CupCakeSlider from '../sliders/CupCakeSlider'
import ClientSlider from '../sliders/ClientSlider'
import HotSellingCakeSection from '../product/HotSellingCakeSection'
import BlogSection3 from '../blog/BlogSection3'
import VerticalTestimonialSlider from '../sliders/VerticalTestimonialSlider'
import FeaturedSection2 from '../featured/FeaturedSection2'

const CakeShopMain = ({
  cakeStaticData,
  cakeCategoryStaticData,
  cakeSliderStaticData,
  cakeClientSliderStaticData,
  blogStaticData,
}) => {
  return (
    <main>
      <CategorySection3 cakeCategoryStaticData={cakeCategoryStaticData}/>
      <LayerCakeSlider cakeStaticData={cakeStaticData}/>
      <OfferSection2/>
      <PoundCakeSlider cakeStaticData={cakeStaticData}/>
      <VideoSection/>
      <CupCakeSlider cakeStaticData={cakeStaticData}/>
      <ClientSlider cakeClientSliderStaticData={cakeClientSliderStaticData}/>
      <HotSellingCakeSection cakeStaticData={cakeStaticData}/>
      <VerticalTestimonialSlider cakeSliderStaticData={cakeSliderStaticData}/>
      <BlogSection3 blogStaticData={blogStaticData}/>
      <FeaturedSection2/>
    </main>
  )
}

export default CakeShopMain
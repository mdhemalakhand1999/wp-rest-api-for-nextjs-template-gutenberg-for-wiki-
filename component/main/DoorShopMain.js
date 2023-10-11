import React from 'react'
import BannerSection from '../banner/BannerSection'
import CategorySection from '../category/CategorySection'
import CollectionSection from '../collection/CollectionSection'
import SubscriptionSection from '../subscription/SubscriptionSection'
import FeaturedProducts from '../featured/FeaturedProducts'
import FeaturedSection from '../featured/FeaturedSection'
import OfferSection from '../offer/OfferSection'
import ModernDoorSection from '../sliders/ModernDoorSection'
import BlogSection from '../blog/BlogSection'
import BrandSection from '../sliders/BrandSection'
import GallerySection from '../gallery/GallerySection'

const DoorShopMain = ({
  firstBannerData,
  productStaticData,
  brandData,
  galleryData,
  blogStaticData
}) => {
  return (
    <main>
        <BannerSection firstBannerData={firstBannerData}/>
        <CategorySection/>
        <CollectionSection/>
        <SubscriptionSection/>
        <FeaturedProducts productStaticData={productStaticData}/>
        <FeaturedSection/>
        <OfferSection/>
        <ModernDoorSection productStaticData={productStaticData}/>
        <BlogSection blogStaticData={blogStaticData}/>
        <BrandSection brandData={brandData}/>
        <GallerySection galleryData={galleryData}/>
    </main>
  )
}

export default DoorShopMain
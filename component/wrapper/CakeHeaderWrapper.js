import React from 'react'
import HeaderSection4 from '../header/HeaderSection4'
import BannerSection3 from '../banner/BannerSection3'

const CakeHeaderWrapper = ({thirdBannerStaticData}) => {
  return (
    <div className="header-banner-bg-wrapper">
        <HeaderSection4/>
        <BannerSection3 thirdBannerStaticData={thirdBannerStaticData}/>
    </div>
  )
}

export default CakeHeaderWrapper
import FooterSection3 from '@/component/footer/FooterSection3'
import CakeShopMain from '@/component/main/CakeShopMain'
import CakeHeaderWrapper from '@/component/wrapper/CakeHeaderWrapper'
import Head from 'next/head'
import React from 'react'

export const getStaticProps = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_HOST;

  const resCakeStaticData = await fetch(`${baseUrl}/api/cakes`)
  const cakeStaticData = await resCakeStaticData.json()

  const resThirdBannerStaticData = await fetch(`${baseUrl}/api/thirdBannerData`)
  const thirdBannerStaticData = await resThirdBannerStaticData.json()

  const resCakeCategoryStaticData = await fetch(`${baseUrl}/api/cakeCategory`)
  const cakeCategoryStaticData = await resCakeCategoryStaticData.json()

  const resCakeSliderStaticData = await fetch(`${baseUrl}/api/cakeSlider`)
  const cakeSliderStaticData = await resCakeSliderStaticData.json()

  const resCakeClientSliderStaticData = await fetch(`${baseUrl}/api/cakeClientSlider`)
  const cakeClientSliderStaticData = await resCakeClientSliderStaticData.json()

  const resBlogData = await fetch(`${baseUrl}/api/blogs`)
  const blogStaticData = await resBlogData.json()
  return { props: { 
    cakeStaticData,
    thirdBannerStaticData,
    cakeCategoryStaticData,
    cakeSliderStaticData,
    cakeClientSliderStaticData,
    blogStaticData,
   } }
}
export default function cakeShop(props) {
  const {
    cakeStaticData,
    thirdBannerStaticData,
    cakeCategoryStaticData,
    cakeSliderStaticData,
    cakeClientSliderStaticData,
    blogStaticData,
  } = props;
  return (
    <>
    <Head>
      <title>Farzaa - Cake Shop</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="images/favicon.png" />
    </Head>
    <>
    <CakeHeaderWrapper thirdBannerStaticData={thirdBannerStaticData}/>
    <CakeShopMain 
    cakeStaticData={cakeStaticData} 
    cakeCategoryStaticData={cakeCategoryStaticData}  
    cakeSliderStaticData={ cakeSliderStaticData}
    cakeClientSliderStaticData={cakeClientSliderStaticData}
    blogStaticData={blogStaticData}
    />
    <FooterSection3/>
    </>
    </>
  )
}
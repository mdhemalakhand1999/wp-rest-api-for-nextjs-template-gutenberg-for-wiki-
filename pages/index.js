
import FooterSection from "@/component/footer/FooterSection";
import HeaderSection from "@/component/header/HeaderSection";
import DoorShopMain from "@/component/main/DoorShopMain";
import Head from "next/head";

export const getStaticProps = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_HOST;

  const resFirstBannerData = await fetch(`${baseUrl}/api/firstBannerData`)
  const firstBannerData = await resFirstBannerData.json()

  const resProductStaticData = await fetch(`${baseUrl}/api/products`)
  const productStaticData = await resProductStaticData.json()

  const resBrandData = await fetch(`${baseUrl}/api/brands`)
  const brandData = await resBrandData.json()

  const resGalleryData = await fetch(`${baseUrl}/api/gallery`)
  const galleryData = await resGalleryData.json()

  const resBlogData = await fetch(`${baseUrl}/api/blogs`)
  const blogStaticData = await resBlogData.json()
  return { props: { 
    firstBannerData,
    productStaticData,
    brandData,
    galleryData,
    blogStaticData,
   } }
}


export default function Home(props) {
  const { 
    firstBannerData, 
    productStaticData, 
    brandData, 
    galleryData,
    blogStaticData
   } = props; 
  return (
    <>
      <Head>
        <title>Farzaa - Door Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.png" />
      </Head>
      <div className="fz-1-body">
        <HeaderSection/>
        <DoorShopMain 
        firstBannerData={firstBannerData} 
        productStaticData={productStaticData} 
        brandData={brandData}
        galleryData={galleryData}
        blogStaticData={blogStaticData}
        />
        <FooterSection/>
      </div>
    </>
  )
}

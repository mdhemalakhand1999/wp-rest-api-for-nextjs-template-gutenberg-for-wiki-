import React from 'react'

const GallerySection2 = ({jewelleryGalleryStaticData}) => {
  return (
    <section className="fz-gallery-section">
            <div className="fz-2-section-heading">
                <h2 className="fz-section-title text-center">Follow Our Instagram <span className="fz-ig-username">#farzaa</span></h2>
            </div>

            <div className="row g-0">
                <div className="col-lg-6">
                    <div className="row g-0">
                        {jewelleryGalleryStaticData.slice(0,4).map((item) => (
                            <div className="col-3" key={item.id}>
                                <div className="fz-single-gallery-item">
                                    <img src={item.imgSrc} alt="Gallery Image"/>
                                    <button className="fz-ig-btn"><i className="fa-brands fa-instagram"></i></button>
                                </div>
                            </div>  
                        ))}
                        
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row g-0">
                        {jewelleryGalleryStaticData.slice(-4).map((item) => (
                            <div className="col-3" key={item.id}>
                                <div className="fz-single-gallery-item">
                                    <img src={item.imgSrc} alt="Gallery Image"/>
                                    <button className="fz-ig-btn"><i className="fa-brands fa-instagram"></i></button>
                                </div>
                            </div>  
                        ))}
                    </div>
                </div>
            </div>
        </section>
  )
}

export default GallerySection2
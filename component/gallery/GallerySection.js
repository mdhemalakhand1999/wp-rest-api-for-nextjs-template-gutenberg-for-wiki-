import React from 'react'

const GallerySection = ({galleryData}) => {
  return (
    <section className="fz-gallery-section fz-1-gallery-section">
            <div className="fz-1-section-heading">
                <h2 className="fz-section-title text-center">@farzaa.door</h2>
            </div>

            <div className="row g-0 justify-content-center">
                {galleryData.map((item) => (
                    <div className="col-lg-2 col-md-3 col-4" key={item.id}>
                        <div className="fz-single-gallery-item">
                            <img src={item.imgSrc} alt="Gallery Image"/>
                            <button className="fz-ig-btn"><i className="fa-brands fa-instagram"></i></button>
                        </div>
                    </div>  
                ))}
                
            </div>
        </section>
  )
}

export default GallerySection
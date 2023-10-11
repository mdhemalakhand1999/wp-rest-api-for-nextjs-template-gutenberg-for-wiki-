import Link from 'next/link'
import React from 'react'

const CategorySection3 = ({cakeCategoryStaticData}) => {
  return (
    <section className="fz-3-category-section">
            <div className="container">
                <div className="fz-3-section-heading">
                    <h2 className="fz-section-title">Browse By Type of Cake</h2>
                    <p className="fz-section-sub-title">Establishments producing and selling flour-based food like cakes cookies, and pastries are what bakeries.</p>
                </div>

                <div className="row gy-3 gy-sm-4 gx-3 justify-content-center">
                    {cakeCategoryStaticData.map((item) => (
                        <div className="col-lg-2 col-md-3 col-4 col-xxs-6" key={item.id}>
                            <div className="fz-3-single-category">
                                <Link href="/shop" className="fz-3-single-category__img">
                                    <img src={item.imgSrc} alt="Product Icon"/>
                                </Link>

                                <div className="fz-3-single-category__txt">
                                    <Link href="/shop">{item.name}</Link>
                                </div>
                            </div>
                        </div>   
                    ))}
                    
                </div>
            </div>
        </section>
  )
}

export default CategorySection3
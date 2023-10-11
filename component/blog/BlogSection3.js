import Link from 'next/link'
import React from 'react'

const BlogSection3 = ({blogStaticData}) => {
  return (
    <section className="fz-3-blog-section">
        <div className="container">
            <div className="fz-3-section-heading">
                <h2 className="fz-section-title">News Feed</h2>
                <p className="fz-section-sub-title">True Pound Cake is a recipe that dates</p>
            </div>

            <div className="fz-3-blogs">
                <div className="row gy-4 gx-4 gx-xl-5 justify-content-center">
                    {blogStaticData.slice(-3).map((item) => (
                        <div className="col-md-4 col-6 col-xxs-12" key={item.id}>
                            <div className="fz-3-single-blog">
                                <div className="fz-3-single-blog__img">
                                    <img src={item.imgSrc} alt="Blog Image"/>
                                </div>

                                <div className="fz-3-single-blog__txt">
                                    <h3 className="fz-3-single-blog__title"><Link href={`/blogs/${item.slug}`}>{item.title}</Link></h3>
                                    <div className="fz-3-single-blog__category-and-actions">
                                        <span className="fz-3-single-blog__category"><Link href="/blog">{item.category}</Link></span>
                                        <Link href={`/blogs/${item.slug}`} className="fz-3-single-blog__btn">Read More <i className="fa-regular fa-arrow-right"></i></Link>
                                    </div>
                                </div>

                            </div>
                        </div>  
                    ))}
                    
                </div>
            </div>
        </div>
    </section>  
    )
}

export default BlogSection3
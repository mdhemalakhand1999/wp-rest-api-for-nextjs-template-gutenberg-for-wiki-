import Link from 'next/link'
import React from 'react'

const BlogSection2 = ({blogStaticData}) => {
  return (
    <section className="fz-2-blog-section">
            <div className="container">
                <div className="fz-2-section-heading">
                    <div className="row gy-4 align-items-center">
                        <div className="col-sm-6 col-8 col-xxs-12">
                            <h2 className="fz-section-title">Latest News</h2>
                        </div>
                        <div className="col-sm-6 col-4 col-xxs-12">
                            <Link href="/blog">More News <i className="fa-regular fa-arrow-right-long"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="fz-blogs">
                    <div className="row g-3 justify-content-center">
                        {blogStaticData.slice(8,11).map((item) => (
                            <div className="col-lg-4 col-sm-6 col-8 col-xxs-12" key={item.id}>
                                <div className="fz-single-blog">
                                    <div className="fz-single-blog__img">
                                        <img src={item.imgSrc} alt="Blog Image"/>
                                        <div className="fz-single-blog__img-overlay"></div>

                                        <div className="fz-single-blog__txt">
                                            <div className="fz-single-blog__infos">
                                                <span className="fz-blog-category">{item.category}</span>
                                                <span className="fz-blog-date">{item.date}</span>
                                            </div>
                                            <h3 className="fz-single-blog__title"><Link href={`/blogs/${item.slug}`}>{item.title}</Link></h3>
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

export default BlogSection2
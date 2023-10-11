import Link from 'next/link'
import React from 'react'
const BlogSection = ({blogStaticData}) => {
  return (
    <section className="fz-1-blog-section">
        <div className="container">
            <div className="fz-1-section-heading">
                <h2 className="fz-section-title">Blog & Insights</h2>
            </div>

            <div className="fz-blogs">
                <div className="row">
                    <div className="col-md-6 col-xxs-12">
                        <div className="fz-single-blog fz-first-blog">
                        {blogStaticData[5] && (
                        <div className="fz-single-blog__img">
                            <img src={blogStaticData[5].imgSrc} alt="Blog Image"/>
                            <div className="fz-single-blog__img-overlay"></div>
                            <div className="fz-single-blog__txt">
                            <div className="fz-single-blog__infos">
                                <span className="fz-blog-category"><Link href="/blog">{blogStaticData[5].category}</Link></span>
                                <span className="fz-blog-date">{blogStaticData[5].date}</span>
                                <span className="fz-blog-length">{blogStaticData[5].length} Min</span>
                            </div>
                            <h3 className="fz-single-blog__title"><Link href={`/blogs/${blogStaticData[5].slug}`}>{blogStaticData[5].title}</Link></h3>
                            <p className="fz-single-blog__desc">{blogStaticData[5].desc}</p>
                            </div>
                        </div>
                        )}


                        </div>
                    </div>

                    <div className="col-md-6 col-xxs-12 d-flex flex-column justify-content-between">
                        {blogStaticData.slice(6,8).map((item) => (
                          <div className="fz-single-blog" key={item.id}>
                            <div className="fz-single-blog__img">
                                <img src={item.imgSrc} alt="Blog Image"/>
                                <div className="fz-single-blog__img-overlay"></div>
                                <div className="fz-single-blog__txt">
                                    <div className="fz-single-blog__infos">
                                        <span className="fz-blog-category"><Link href="/blog">{item.category}</Link></span>
                                        <span className="fz-blog-date">{item.date}</span>
                                        <span className="fz-blog-length">{item.length} Min</span>
                                    </div>
                                    <h3 className="fz-single-blog__title"><Link href={`/blogs/${item.slug}`}>{item.title}</Link></h3>
                                </div>
                            </div>
                        </div>  
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogSection
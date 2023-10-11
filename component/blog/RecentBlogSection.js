import { FarzaaContext } from '@/context/FarzaaContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const RecentBlogSection = () => {
    const {blogDataList} = useContext(FarzaaContext)
  return (
    <section className="sidebar-single-area blog-area">
        <h3 className="sidebar-single-area__title">Recent post</h3>
        {blogDataList.slice(0,3).map((item) => (
            <div className="fz-sidebar-single-blog" key={item.id}>
                <div className="fz-sidebar-single-blog__img">
                    <img src={`/${item.imgSrc}`} alt="blog image"/>
                </div>

                <div className="fz-sidebar-single-blog__txt fz-single-blog fz-inner-page-blog">
                    <div className="fz-sidebar-single-blog__infos fz-single-blog__infos">
                        <span className="fz-single-blog__category"><Link href="#">{item.category}</Link></span>
                        <span className="fz-single-blog__date">{item.date}</span>
                    </div>

                    <h5 className="fz-sidebar-single-blog__title"><Link href={`/blogs/${item.slug}`}>{item.title}</Link></h5>
                </div>
            </div> 
        ))}
        
    </section>
  )
}

export default RecentBlogSection
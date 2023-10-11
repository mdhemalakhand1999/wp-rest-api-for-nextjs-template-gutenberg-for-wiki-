import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import BlogDetailSection from '../blog/BlogDetailSection'

const BlogDetailsMain = ({product}) => {
  return (
    <>
        <BreadcrumbSection title={"Blog Details"} current={"Blog Details"}/>
        <BlogDetailSection product={product}/>
    </>
  )
}

export default BlogDetailsMain
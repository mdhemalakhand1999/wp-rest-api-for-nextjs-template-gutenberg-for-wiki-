import React from 'react'
import Layout from '../layout/Layout'
import ShopDetailsMain from './ShopDetailsMain'
const ProductDetailsMain = ({product, allProduct}) => {
  return (
    <Layout>
        <ShopDetailsMain product={product} allProduct={allProduct}/>
    </Layout>
  )
}

export default ProductDetailsMain
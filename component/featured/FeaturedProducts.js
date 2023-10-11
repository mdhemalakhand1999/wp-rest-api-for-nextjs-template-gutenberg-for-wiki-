import { FarzaaContext } from '@/context/FarzaaContext'
import api from '@/utils/wooCommerceApi';
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'

const FeaturedProducts = ({productStaticData}) => {
    const [featuredProductIds, setFeaturedProductIds] = useState();
    const [featuredProductListByIds, setFeaturedProductListByIds] = useState();
    const {
        addToCart,
        addToWishlist,
        allProduct,
        allWooProducts,
        calculatePercentageOfPriceOffer
    } = useContext(FarzaaContext)
    // fetch all featured product ids
    useEffect(() => {
        async function allFeaturedProducts() {
            try {
                const response = await fetch('http://localhost/wp/gutenberg-for-wiki/wp-json/wp/v2/redux-data');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const featuredProduct = await response.json(); 
                const featuredProductIds = featuredProduct?.all_customizer_data?.featured_products;
                setFeaturedProductIds(featuredProductIds);
                if(featuredProductIds?.length > 0) {
                    const response = await api.get(
                        `products?ids=${featuredProductIds.join(',')}`
                    );
                    response && setFeaturedProductListByIds(response.data);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
        allFeaturedProducts();
    }, [])
  return (
    <section className="featured-product-section">
        <div className="container">
            <div className="fz-1-section-heading">
                <h2 className="fz-section-title">Featured Product</h2>
            </div>

            <div className="row gy-4">
                {featuredProductListByIds && featuredProductListByIds.slice(-2).map((item, index) => {
                    // if product offer exists, then calculate product price otherwise return actual product price
                    const {price, regular_price} = item;
                    let percentage = 0;
                    let product_old_price = 0;
                    if(price != regular_price) {
                        product_old_price = regular_price;
                        percentage = calculatePercentageOfPriceOffer(regular_price, price);
                    }
                    return(
                        <div className="col-6 col-xxs-12" key={item.id}>
                          <div className="fz-feat-single-product fz-1-single-product">
                              <div className="fz-single-product__img">
                                  {item?.images[0].src && <img src={item?.images[0].src} alt={item?.images[0].alt && item?.images[0].alt}/>}
                                  {percentage && <span className="fz-single-product__tag">-3{percentage}%</span>}
      
                                  <div className="fz-single-product__actions">
                                      <button 
                                      className="fz-add-to-wishlist-btn"
                                      onClick={() => allWooProducts && addToWishlist(item.id, allWooProducts)}
                                      >
                                          <span className="btn-txt">add To wishlist</span>
                                          <span className="btn-icon">{item.isInWishlist? (<i className="fa-solid fa-heart"></i>):(<i className="fa-light fa-heart"></i>)}</span>
                                      </button>
      
                                      <button 
                                      className="fz-add-to-cart-btn"
                                      onClick={() => allWooProducts && addToCart(item.id, allWooProducts)}
                                      >
                                          <span className="btn-txt">add To cart</span>
                                          <span className="btn-icon"><i className="fa-light fa-cart-shopping"></i></span>
                                      </button>
      
                                      <button className="fz-add-to-compare-btn">
                                          <span className="btn-txt">select to compare</span>
                                          <span className="btn-icon"><i className="fa-light fa-arrow-right-arrow-left"></i></span>
                                      </button>
                                  </div>
                              </div>
      
                              <div className="fz-single-product__txt">
                                  <h3 className="fz-single-product__title"><Link href={`/products/${item.slug}`}>{item.name}</Link></h3>
                                  <p className="fz-single-product__price">
                                      <span className="current-price">${item.price}</span>
                                      {product_old_price != 0 && <span className="prev-price text-decoration-line-through">${product_old_price}</span>}
                                  </p>
                              </div>
                          </div>
                      </div>  
                    )
                })}
                
            </div>
        </div>
    </section>
  )
}

export default FeaturedProducts
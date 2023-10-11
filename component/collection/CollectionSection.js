import api from '@/utils/wooCommerceApi';
import React, { isValidElement, useContext, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';
import { FarzaaContext } from '@/context/FarzaaContext';

const CollectionSection = () => {
    const [stateCategoryData, setStateCategoryData] = useState(); 
    const {addToCart,addToWishlist,slides,allProduct} = useContext(FarzaaContext)
    const [activeTab, setActiveTab] = useState('all');
    const [stateProducts, setStateProducts] = useState();
    useEffect(() => {
       async function getCategoryByCollection() {
        try {
            const response = await fetch('http://localhost/wp/gutenberg-for-wiki/wp-json/wp/v2/redux-data');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const allInfo = await response.json();
            const {latest_collection_product_category} = allInfo.all_customizer_data;
            // Fetch categories by IDs
            const categoriesResponse = await api.get("products/categories", {
                include: latest_collection_product_category.join(","),
            });
            const categories = categoriesResponse.data;
            setStateCategoryData(categories);
          } catch (error) {
            console.error('Error:', error);
          }
       }
       getCategoryByCollection();
    }, []);
    useEffect(() => {
        async function getAllProducts() {
            api.get("products")
            .then((response) => {
                setStateProducts(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
        }
        getAllProducts();
    }, [])

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    const swiperRef = useRef(null);

    const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
    }
    };

    const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slidePrev();
    }
    };
    /**
     * get all product slug by category
     */
    let allCatIds = [];
    stateProducts && Object.values(stateProducts).map((item, id) => {
        allCatIds = [...allCatIds, item.categories];
    })
    const filteredItemList =
    activeTab === 'all'
      ? stateProducts
      : stateProducts && stateProducts.filter((item) => {
        const id = item.categories.map((item) => item.id);
        const activeTabCat = Number(activeTab);
        const idArr = Object.values(id);
        return idArr.includes(activeTabCat);
      });
  return (
    <section className="fz-1-latest-collection">
        <div className="container">
            <div className="fz-1-section-heading">
                <h2 className="fz-section-title">Latest Collection</h2>
            </div>

            <Nav 
            activeKey={activeTab}
            onSelect={handleTabChange}
            className="filter-navs"
            >
                <Nav.Item>
                    <Nav.Link eventKey='all' role='button'>
                        <span className="filter-nav-order">01</span>
                        <span className="filter-nav-name">All</span>
                    </Nav.Link>
                </Nav.Item>
                {
                    stateCategoryData && Object.values(stateCategoryData).map((item, index) => {
                        index+=2;
                        return(
                            <Nav.Item>
                                <Nav.Link eventKey={item.id && item.id} role='button'>
                                    <span className="filter-nav-order">0{index && index}</span>
                                    <span className="filter-nav-name">{item.name && item.name}</span>
                                </Nav.Link>
                            </Nav.Item>
                        )
                    })
                }

                <div className="fz-1-latest-products-slider-nav" ref={swiperRef}>
                    <button type="button" className="product-prev" onClick={goPrev}>
                        <i className="fa-regular fa-angle-left"></i>
                    </button>
                    <button type="button" className="product-next" onClick={goNext}>
                        <i className="fa-regular fa-angle-right"></i>
                    </button>
                </div>                
            </Nav>


            <Swiper
                slidesPerView={slides}
                className="fz-1-products-container"
                navigation={{
                    prevEl: '.product-prev',
                    nextEl: '.product-next',
                }}
                modules={[Navigation]}
            >
                {
                    filteredItemList && filteredItemList.map((item, index)=>{
                        let categories = item.categories;
                        function getSlugString(products) {
                            let slugString = "";
                            for (const product of products) {
                                slugString += product["slug"] + " ";
                            }
                            return slugString.slice(0, -2);
                        }               
                        let slugStringFinal = getSlugString(categories);
                        return(
                            <SwiperSlide key={index} className={`fz-1-single-product ${slugStringFinal}`}>
                                <div className="fz-single-product__img">
                                    <img src={item.images?.[0]?.src && item.images?.[0]?.src} alt={item.images?.[0]?.alt && item.images?.[0]?.alt}/>
                                    <div className="fz-single-product__actions">
                                        <button 
                                        className="fz-add-to-wishlist-btn"
                                        onClick={() => addToWishlist(item.id,stateProducts)}
                                        >
                                            <span className="btn-txt">add To wishlist</span>
                                            <span className="btn-icon">{item.isInWishlist? (<i className="fa-solid fa-heart"></i>):(<i className="fa-light fa-heart"></i>)}</span>
                                        </button>
    
                                        <button 
                                        className="fz-add-to-cart-btn"
                                        onClick={() => addToCart(item.id,stateProducts)}
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
                                    <Link href={`/products/${item.slug && item.slug}`} className="fz-single-product__title">{item.name && item.name}</Link>
                                    <p className="fz-single-product__price">
                                        <span className="current-price">${item.price}</span>
                                    </p>
                                </div>
                            </SwiperSlide> 
                        )
                    })
                }
            </Swiper>
        </div>
    </section>
  )
}

export default CollectionSection
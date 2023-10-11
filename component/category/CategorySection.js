import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import api from '@/utils/wooCommerceApi';
const CategorySection = () => {
    const [filterCategory, setFilterCategory] = useState();
    const [selectedCategoryInfo, setSelectedCategoryInfo] = useState([]);
    useEffect(() => {
        async function fetchWooCategory() {
            try {
              const response = await fetch('http://localhost/wp/gutenberg-for-wiki/wp-json/wp/v2/redux-data');
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const allInfo = await response.json();
              const wooCategoryFetch = allInfo.all_customizer_data.product_category_list_from_redux;
              const categoryIdString = wooCategoryFetch.join(',');
              const requestUrl = `products/categories?include=${categoryIdString}`;
              await api.get(requestUrl)
              .then((response) => {
                if (response.status === 200) {
                    const categoriesWithUrls = response.data.map((category) => ({
                        ...category
                      }));
                    setSelectedCategoryInfo(categoriesWithUrls);
                } else {
                  console.error("Error:", response.statusText);
                }
              })
              .catch((error) => {
                console.error("Request Error:", error);
              });
          
            } catch (error) {
              console.error('Error:', error);
            }
          }
          fetchWooCategory();
    }, [])
  return (
    <section className="fz-1-category-section">
        <div className="container">
            <div className="fz-1-section-heading">
                <h2 className="fz-section-title">Shop By Category</h2>
            </div>

            <div className="row g-md-4 g-3 justify-content-center align-items-center align-items-xl-stretch">
                <div className="col-xl-3 col-lg-4 col-8 col-xxs-12 fz-1-category-col">
                    {
                        selectedCategoryInfo && selectedCategoryInfo.filter((value, index) => index < 2).map((item, index) => {
                            return(
                                <>
                                    {item?.image?.src && <Link key={index} href={`/shop?category=${item.id}`} className="fz-1-single-category">
                                        <img src={item?.image?.src} alt="Product Icon"/>
                                        {item.name && <h5 className="fz-1-single-category__title">{item.name} {item.count && <>({item.count})</>}</h5>}
                                    </Link>}
                                </>
                            )      
                        })
                    }
                </div>

                <div className="col-xl-6 col-4 col-xxs-12">
                    {
                        selectedCategoryInfo && selectedCategoryInfo.filter((value, index) => index == 2).map((item, index) => {
                            return(
                                <>
                                    {item?.image?.src && <Link key={index} href={`/shop?category=${item.id}`} className="fz-1-single-category">
                                        <img src={item?.image?.src} alt="Product Icon"/>
                                        {item.name && <h5 className="fz-1-single-category__title">{item.name} {item.count && <>({item.count})</>}</h5>}
                                    </Link>}
                                </>
                            )      
                        })
                    }
                </div>

                <div className="col-xl-3 col-lg-4 col-8 col-xxs-12 fz-1-category-col">
                    {
                        selectedCategoryInfo && selectedCategoryInfo.filter((value, index) => index < 5 && index > 2).map((item, index) => {
                            return(
                                <div key={index}>
                                    {item?.image?.src && <Link href={`/shop?category=${item.id}`} className="fz-1-single-category">
                                        <img src={item?.image?.src} alt="Product Icon"/>
                                        {item.name && <h5 className="fz-1-single-category__title">{item.name} {item.count && <>({item.count})</>}</h5>}
                                    </Link>}
                                </div>
                            )      
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default CategorySection
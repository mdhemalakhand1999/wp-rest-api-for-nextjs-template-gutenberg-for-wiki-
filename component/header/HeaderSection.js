import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import HeaderNav from '../navigation/HeaderNav'
import { FarzaaContext } from '@/context/FarzaaContext'
import CartModal from '../modal/CartModal'
import WishlistModal from '../modal/WishlistModal'

const HeaderSection = () => {
    const [logo, setLogo] = useState();
    const [topbardata, setTopbarData] = useState();
    const {
        isHeaderFixed,
        handleWishlistShow,
        handleCartShow,
        cartItemAmount,
        wishlist,
        cartItems,
        handleQuantityChange,
        handleRemoveItem,
        handleRemoveItemWishlist,
        handleSidebarOpen,
        wishlistItemAmount
    } = useContext(FarzaaContext)
    useEffect(() => {
        async function fetchLogo() {
            const response = await fetch('http://localhost/wp/gutenberg-for-wiki/wp-json/custom/v2/logo');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const getLogo = await response.json();
            setLogo(getLogo.logo_url)
        }
        fetchLogo();
      }, [])
      /**
       * Topbar data
       */
      useEffect(() => {
        async function fetchTopbarData() {
            const response = await fetch('http://localhost/wp/gutenberg-for-wiki/wp-json/wp/v2/redux-data');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const headerTopData = await response.json();
            const jsonData = {
                "social_icon_select": headerTopData.all_customizer_data.social_icon_select,
                "social_icon_link": headerTopData.all_customizer_data.social_icon_link
            };
            const socialData = jsonData.social_icon_select.map((icon, index) => ({
                icon,
                link: jsonData.social_icon_link[index]
            }));
            socialData && setTopbarData({
                topbar_mail: headerTopData.all_customizer_data.topbar_mail,
                topbar_text: headerTopData.all_customizer_data.topbar_text,
                socialData
            }
            );
        }
        fetchTopbarData()
      }, [])
  return (
    <header className="fz-header-section fz-1-header-section">
        {
            topbardata && 
                <div className="top-header">
                    <div className="container">
                        <div className="row gy-3 align-items-center">
                            <div className="col-lg-4 d-lg-block d-none">
                            {
                                topbardata.topbar_mail &&
                                <span className="mail-address">
                                    <a href={`mailto: ${topbardata.topbar_mail}`}>
                                        <i className="fa-regular fa-envelope-open"></i>
                                        {topbardata.topbar_mail}
                                    </a>
                                </span>
                            }
                            </div>
                            {topbardata.topbar_text &&
                                <div className="col-lg-4 col-md-6">
                                    <h6>{topbardata.topbar_text}</h6>
                                </div>
                            }
                            

                            <div className="col-lg-4 col-md-6">
                                <div className="top-header-right-actions">
                                    {
                                        topbardata && topbardata.socialData &&
                                        <div className="top-header-socials">
                                        {
                                            topbardata.socialData.map((item, index) => {
                                                return(
                                                    <a key={index} href={item.link && item.link}><i className={item.icon && item.icon}></i></a>
                                                )
                                            })
                                        }
                                        </div>
                                    }

                                    <select name="currency" id="top-header-currency-dropdown">
                                        <option value="USD">USD</option>
                                        <option value="Taka">Taka</option>
                                        <option value="Euro">Euro</option>
                                        <option value="Rupee">Rupee</option>
                                    </select>

                                    <select name="language" id="top-header-language-dropdown">
                                        <option value="English">English</option>
                                        <option value="Bangla">Bangla</option>
                                        <option value="French">French</option>
                                        <option value="Hindi">Hindi</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        }

        <div className={`bottom-header to-be-fixed ${isHeaderFixed? 'fixed':''}`}>
            <div className="container">
                <div className="row g-0 align-items-center">
                    <div className="col-5 header-nav-container d-lg-block d-none">
                        <HeaderNav position={''}/>
                    </div>

                    <div className="col-lg-2 col-md-6 col-9">
                        <div className="fz-logo-container text-lg-center text-start">
                            <Link href="/">
                                <img src={logo && logo} alt="logo" className="fz-logo"/>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-6 col-3">
                        <div className="fz-header-right-content">
                            <form action="#" className="bottom-header-search-form d-none d-sm-flex">
                                <input type="text" name="search" id="bottom-header-search-input" placeholder="Search keyword"/>
                                <button type="submit"><i className="fa-regular fa-magnifying-glass"></i></button>
                            </form>

                            <ul className="fz-header-right-actions d-flex align-items-center justify-content-end">
                                <li>
                                    <button className="fz-header-wishlist-btn d-none d-lg-block" onClick={handleWishlistShow}>
                                        <i className="fa-light fa-heart"></i>
                                        <span className="count">{wishlistItemAmount}</span>
                                    </button>
                                </li>
                                <li>
                                    <button className="fz-header-cart-btn d-none d-lg-block" onClick={handleCartShow}>
                                        <i className="fa-light fa-shopping-bag"></i>
                                        <span className="count">{cartItemAmount}</span>
                                    </button>
                                </li>
                                <li className="d-block d-lg-none"><a role="button" className="fz-hamburger" onClick={handleSidebarOpen}><i className="fa-light fa-bars-sort"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <WishlistModal wishlistArray={wishlist} removeItem={handleRemoveItemWishlist}/>
        <CartModal cartArray={cartItems} remove={handleRemoveItem} quantity={handleQuantityChange}/>
    </header>
  )
}

export default HeaderSection
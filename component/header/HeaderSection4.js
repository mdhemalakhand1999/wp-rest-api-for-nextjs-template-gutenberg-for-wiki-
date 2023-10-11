import React, { useContext } from 'react'
import HeaderNav from '../navigation/HeaderNav'
import Link from 'next/link'
import { FarzaaContext } from '@/context/FarzaaContext'
import WishlistModal from '../modal/WishlistModal'
import CartModal from '../modal/CartModal'
import HeaderCategoryArea from './HeaderCategoryArea'

const HeaderSection4 = () => {
    const {
        handleWishlistShow,
        handleCartShow,
        isHeaderFixed,
        cartItemAmount,
        handleRemoveItem,
        handleQuantityChange,
        cartItems,
        wishlist,
        handleRemoveItemWishlist,
        handleSidebarOpen,
        wishlistItemAmount
    } = useContext(FarzaaContext)

  return (
    <header className={`fz-3-header-section to-be-fixed ${isHeaderFixed? 'fixed':''}`}>
            <div className="row m-0 align-items-center">
                <div className="col-lg-3 col-md-6 col-9">
                    <div className="fz-3-header-left-content d-flex align-items-center">
                        <div className="fz-3-logo-container">
                            <Link href="/">
                                <img src="images/logo-light.png" alt="logo" className="fz-3-logo"/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-6 header-nav-container order-3 order-lg-2">
                    <HeaderNav position={'justify-content-center'}/>
                </div>

                <div className="col-lg-3 col-md-6 col-3 order-2 order-lg-3">
                    <div className="fz-header-right-content">
                        <ul className="fz-header-right-actions d-flex align-items-center justify-content-end">
                            <li>
                                <a role="button" className="fz-header-wishlist-btn d-none d-lg-block" onClick={handleWishlistShow}>
                                    <i className="fa-regular fa-heart"></i>
                                    <span className='count'>{wishlistItemAmount}</span>
                                </a>
                            </li>
                            <li>
                                <a role="button" className="fz-header-cart-btn d-none d-lg-block" onClick={handleCartShow}>
                                    <i className="fa-light fa-basket-shopping"></i>
                                    <span className="count">{cartItemAmount}</span>
                                </a>
                            </li>
                            <li><a role="button" onClick={handleSidebarOpen} className="fz-hamburger d-block d-lg-none"><i className="fa-light fa-bars-sort"></i></a></li>
                        </ul>

                        <HeaderCategoryArea header={"fz-3-category-area"} title={'d-none'}/>
                    </div>
                </div>
            </div>
            <WishlistModal wishlistArray={wishlist} removeItem={handleRemoveItemWishlist}/>
            <CartModal cartArray={cartItems} remove={handleRemoveItem} quantity={handleQuantityChange}/>
        </header>
  )
}

export default HeaderSection4
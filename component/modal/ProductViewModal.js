import { FarzaaContext } from '@/context/FarzaaContext'
import React, { useContext, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import ProductDetailAction from '../product/ProductDetailAction'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ProductViewModal = () => {
    const {
        isProductViewOpen,
        handleProductViewClose,
        productInView,
        allCake
    } = useContext(FarzaaContext)
    const router = useRouter(); // Get the router instance

    useEffect(() => {
        const handleCloseModal = () => {
        if (isProductViewOpen) {
            handleProductViewClose();
        }
        };

        router.events.on('routeChangeStart', handleCloseModal);

        return () => {
        router.events.off('routeChangeStart', handleCloseModal);
        };
    }, [router, isProductViewOpen, handleProductViewClose]);
  return (
    <Modal show={isProductViewOpen} onHide={handleProductViewClose} size='xl' centered className="fz-quick-view-modal">
        <Modal.Body className="container p-0">
            <div className="fz-quick-view-modal-content">
                <div className="fz-product-details__img">
                <img src={productInView ? productInView.imgSrc : ''} alt="Product Image"/>
                </div>
                <div className="fz-product-details__txt">
                    <h2 className="fz-product-details__title"><Link href={`/cakes/${productInView ? productInView.slug: ''}`}>{productInView? productInView.name:''}</Link></h2>
                    <div className="fz-product-details__price-rating">
                        <span className="price">${productInView? productInView.price : ''}.00</span>
                        <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-light fa-star"></i>
                        </div>
                    </div>

                    <div className="fz-product-details__infos">
                        <ul>
                            <li><span className="info-property"> SKU </span> : <span className="info-value">D890f</span></li>
                            <li><span className="info-property"> Category </span> : <span className="info-value">{productInView ? productInView.category : ''}</span></li>
                            <li><span className="info-property"> Availablity </span> : <span className="info-value">in Stock</span></li>
                        </ul>
                    </div>

                    <p className="fz-product-details__short-descr">
                        Each controller comes with adjustable in-built dual shock mechanism. They can be
                        toggled on/off and shock setting of 1,2 and 3 Auxiliary buttons around the home
                        button enable more key bindings to be designated.
                    </p>

                    <ProductDetailAction item={productInView} allProduct={allCake}/>
                </div>
            </div>
        </Modal.Body>
    </Modal>
  )
}

export default ProductViewModal
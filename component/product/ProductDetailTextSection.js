import React from 'react'
import ProductDetailAction from './ProductDetailAction';

const ProductDetailTextSection = ({product,allProduct}) => {
  return (
    <div className="fz-product-details__txt">
        <h2 className="fz-product-details__title">{product.name}</h2>
        <div className="fz-product-details__price-rating">
            <span className="price">${product.price}.00</span>
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
                <li><span className="info-property"> Category </span> : <span className="info-value">{product.category}</span></li>
                <li><span className="info-property"> Availablity </span> : <span className="info-value">in Stock</span></li>
            </ul>
        </div>

        <p className="fz-product-details__short-descr">
            Each controller comes with adjustable in-built dual shock mechanism. They can be
            toggled on/off and shock setting of 1,2 and 3 Auxiliary buttons around the home
            button enable more key bindings to be designated.
        </p>

        <ProductDetailAction item={product} allProduct={allProduct}/>

        <div className="fz-product-details__payment-methods">
            <img src="/images/card.png" alt="Pyament Methods"/>
            <span className="dialog">Guaranteed safe & secure checkout</span>
        </div>
    </div>
  )
}

export default ProductDetailTextSection
import { FarzaaContext } from '@/context/FarzaaContext';
import Link from 'next/link'
import { useContext } from 'react';

const OfferSection = () => {
    const {allReduxDataState} = useContext(FarzaaContext);
    const {discount_banner_title, discount_banner_subtitle, discount_banner_desc} = allReduxDataState?.all_customizer_data;
    const discount_banner_bg_image = allReduxDataState?.all_customizer_data?.discount_banner_image?.url;
    console.log(allReduxDataState);
  return (
    <section className="fz-1-offer-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="fz-single-offer__txt">
                        {discount_banner_title && <h2 className="fz-single-offer__discount-percentage">{discount_banner_title}</h2>}
                        {discount_banner_subtitle && <h3 className="fz-single-offer__title">{discount_banner_subtitle}</h3>}
                        {discount_banner_desc && <p className="fz-single-offer__disc">{discount_banner_desc}</p>}
                        <Link href="/shop" className="fz-1-banner-btn fz-1-single-offer__btn">Shop Now</Link>
                    </div>
                </div>

                <div className="col-lg-6 align-self-end text-center">
                    <img src="images/fz-3-offer-img.png" alt="Offer Image"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OfferSection
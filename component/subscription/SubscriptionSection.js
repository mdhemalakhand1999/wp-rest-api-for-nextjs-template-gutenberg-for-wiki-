import React, { useEffect, useState } from 'react'

const SubscriptionSection = () => {
    const [subscribe_title, setSubscribeTitle] = useState();
    const [subscribe_subtitle, setSubscribeSubTitle] = useState();
    const [subscribeImg, setSubscribeImg] = useState();
    useEffect(() => {
        async function fetchSubscribeData() {
            const response = await fetch('http://localhost/wp/gutenberg-for-wiki/wp-json/wp/v2/redux-data');
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const subscribeData = await response.json();
              const {subscribe_title, subscribe_subtitle, topbar_mail} = subscribeData.all_customizer_data;
              const subscribeBGImg = subscribeData.all_customizer_data.subscribe_bg_image.url;
              setSubscribeTitle(subscribe_title);
              setSubscribeSubTitle(subscribe_subtitle);
              setSubscribeImg(subscribeBGImg);
        }
        fetchSubscribeData();
    }, []);
  return (
    <div className="subs-section" style={{backgroundImage: `url(${subscribeImg})`}}>
        <div className="container">
            <div className="row gy-4 align-items-center">
                <div className="col-lg-6">
                    <div className="subs-section__txt">
                        {subscribe_title && <h2>{subscribe_title}</h2>}
                        {subscribe_subtitle && <h3>{subscribe_subtitle}</h3> }
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="subs-section__form">
                        <form action="#">
                            <input type="email" name="subs-mail" id="subs-mail-input" placeholder="Enter your email address"/>
                            <button className="subs-form-btn">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubscriptionSection
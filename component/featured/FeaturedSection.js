import React, { useEffect, useState } from 'react'

const FeaturedSection = () => {
    const [allFeatureListserializedArr, setAllFeatureListserializedArr] = useState();
    useEffect(() => {
        async function allFeatureList() {
            try {
                const response = await fetch('http://localhost/wp/gutenberg-for-wiki/wp-json/wp/v2/redux-data');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const allData = await response.json(); 
                const {feature_repeater_image_icon_select, feature_repeater_subtitle, feature_repeater_title} = allData?.all_customizer_data;
                const allFeatureListUnserializedArr = [feature_repeater_image_icon_select, feature_repeater_subtitle, feature_repeater_title];
                const allFeatureListserializedArr = Object.values(allFeatureListUnserializedArr).reduce((acc, arr) => {
                    arr.forEach((el, i) => {
                        acc[i] = (acc[i] || []).concat(el);
                    });
                    return acc;
                }, [])
                setAllFeatureListserializedArr(allFeatureListserializedArr);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        allFeatureList();
    }, []);
  return (
    <div className="fz-1-features-section">
        <div className="container">
            {allFeatureListserializedArr && 
            <div className="features-container align-items-center">
                {
                    allFeatureListserializedArr.map((item, index) => {
                    return(
                        <div className="fz-single-feature">
                            <div className="fz-single-feature__img">
                                {item[0]?.url && <img src={item[0].url} alt="Feature Icon"/>}
                            </div>
                            <div className="fz-single-feature__txt">
                                {item[1] && <h4 className="fz-single-feature__title">{item[1]}</h4>}
                                {item[2] && <h6 className="fz-single-feature__sub-title">{item[2]}</h6>}
                            </div>
                        </div>
                    )})
                }
            </div>}
        </div>
    </div>
  )
}

export default FeaturedSection
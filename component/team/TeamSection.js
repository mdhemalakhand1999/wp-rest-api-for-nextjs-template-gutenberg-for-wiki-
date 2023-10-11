import Link from 'next/link'
import React from 'react'

const TeamSection = ({teamStaticData}) => {
  return (
    <div className="fz-team-member-section">
        <div className="container">
            <h2 className="section-title">Our Team Member</h2>

            <div className="row g-3 g-md-4 justify-content-center">
                {teamStaticData.map((item) => (
                    <div className="col-lg-3 col-md-4 col-6 col-xxs-12" key={item.id}>
                        <div className="fz-single-team-member">
                            <div className="fz-single-team-member__img">
                                <img src={item.imgSrc} alt={item.name}/>
                            </div>

                            <div className="fz-single-team-member__txt">
                                <div className="fz-single-team-member__info">
                                    <h5 className="fz-single-team-member__name">{item.name}</h5>
                                    <span className="fz-single-team-member__label">{item.position}</span>
                                </div>

                                <ul className="fz-single-team-member__socials">
                                    <li><Link href="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                    <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                                    <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                    <li><Link href="#"><i className="fa-brands fa-youtube"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TeamSection
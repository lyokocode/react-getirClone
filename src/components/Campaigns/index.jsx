import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import Banners from "api/banners.json"
import "Style/campaigns.scss"

const Campaigns = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    const [banners, setBanners] = useState([])

    useEffect(() => {
        setBanners(Banners)
    }, [])

    return (
        <div className='campaigns'>
            <div className='container'>
                <h6>Kampanyalar</h6>
                <Slider {...settings} className="slider">
                    {banners && banners.map(banner => (
                        <figure>
                            <img src={banner.image} />
                        </figure>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Campaigns
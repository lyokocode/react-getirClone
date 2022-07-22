import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import Banners from "api/banners.json"
import "Style/campaigns.scss"
import Title from 'components/ui/Title';

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
        <main className='campaigns'>
            <div className='container'>
                <Title className="title" >Kapanyalar</Title>
                <Slider {...settings} className="slider">
                    {banners && banners.map(banner => (
                        <picture>
                            <img src={banner.image} />
                        </picture>
                    ))}
                </Slider>
            </div>

        </main>
    )
}

export default Campaigns
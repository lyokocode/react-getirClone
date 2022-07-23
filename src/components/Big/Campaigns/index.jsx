import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import Banners from "api/banners.json"
import "Style/bigCampaigns.scss"
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
                <Title className="title" >Kampanyalar</Title>
                <Slider {...settings} className="slider">
                    <image>
                        <img src='https://cdn.getir.com/misc/62152d4dec212ba4186356be_banner_tr_1649138690922.jpeg' />
                    </image>
                    <image>
                        <img src='https://cdn.getir.com/misc/62a0cbe978ab4566649da256_banner_tr_1654705156487.jpeg' />
                    </image>
                    <image>
                        <img src='https://cdn.getir.com/misc/611e67605cf744c8c6b2a368_banner_tr_1654704221088.jpeg' />
                    </image>

                </Slider>
            </div>

        </main>
    )
}

export default Campaigns
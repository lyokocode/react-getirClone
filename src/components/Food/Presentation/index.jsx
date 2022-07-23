import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import presentationData from "api/presentation.json"
import "Style/presentation.scss"

const Presentation = () => {

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

    const [promotion, setPromotion] = useState([])

    useEffect(() => {
        setPromotion(presentationData)
    }, [])

    return (
        <main className='presentation'>
            <div className='container'>
                <Slider {...settings} className="slider">
                    {promotion && promotion.map(product => (
                        <picture key={product.id}>
                            <img src={product.image} />
                            <p>{product.title}</p>
                        </picture>
                    ))}
                </Slider>
            </div>

        </main>
    )
}

export default Presentation
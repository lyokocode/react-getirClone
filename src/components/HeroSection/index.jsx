import React, { useState } from 'react'

import Slider from "react-slick";
import "Style/heroSection.scss";
import ReactFlagsSelect from "react-flags-select";



const HeroSection = () => {
    const [selected, setSelected] = useState("TR");

    const phones = {
        US: "+15",
        DE: "+60",
        TR: "+90",
        IT: "+7",
        IN: "+37"

    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section>
            <div className='gradient'></div>

            <Slider {...settings} className="slider">
                <figure>
                    <img src='https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg' />
                </figure>
                <figure>
                    <img src='https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg' />
                </figure>
                <figure>
                    <img src='https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg' />
                </figure>
            </Slider>
            <div className='content'>

                <figure className='hero-logo'>
                    <img src='https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg' />
                    <h1>Dakikalar içinde <br /> kapınızda</h1>
                </figure>
                <div className='sign-in'>
                    <h4>Giriş yap veya kayıt ol</h4>
                    <main className='contact'>
                        <div className='flags'>

                            <ReactFlagsSelect
                                countries={Object.keys(phones)}
                                customLabels={phones}
                                selected={selected}
                                onSelect={(code) => setSelected(code)}
                            />
                        </div>
                        <input type="phone" placeholder='Telefon numarası' />
                    </main>
                    <button className='phone'>Telefon numarası ile devam et</button>
                </div>
            </div>
        </section>

    )
}

export default HeroSection
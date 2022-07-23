import React, { useState } from 'react'
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import "Style/bigHero.scss";



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
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    return (
        <section>
            <div className='gradient'></div>

            <Slider {...settings} className="slider">
                <figure>
                    <img src='https://getir.com/_next/static/images/market-1-ae76901414c55d46ffc17ff0182c264b.jpg' />
                </figure>
                <figure>
                    <img src='https://getir.com/_next/static/images/market-2-4d10b864d127e72942af806876ff3f24.jpg' />
                </figure>
                <figure>
                    <img src='https://getir.com/_next/static/images/market-3-40a5665bd2f5bf388061e0c2f3ca4a4b.jpg' />
                </figure>
                <figure>
                    <img src='https://getir.com/_next/static/images/market-4-084f26811a2ec79bfcac5582e29db80d.jpg' />
                </figure>
                <figure>
                    <img src='https://getir.com/_next/static/images/market-5-9585774ecca123da206c87c36f01e0e8.jpg' />
                </figure>
                <figure>
                    <img src='https://getir.com/_next/static/images/market-6-61d65d55307e0c0da7bc7fe928951ba3.jpg' />
                </figure>
                <figure>
                    <img src='https://getir.com/_next/static/images/market-7-8f621120b0e2786fad8389cd5b1718be.jpg' />
                </figure>
                <figure>
                    <img src='https://getir.com/_next/static/images/market-8-f549a531be51240734553fb71550ce5d.jpg' />
                </figure>
            </Slider>
            <div className='content'>

                <div className='getir-title'>
                    <h1><span>getir</span>büyük</h1>
                    <h3>Uygun fiyatlarla kapınızda!</h3>
                </div>
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
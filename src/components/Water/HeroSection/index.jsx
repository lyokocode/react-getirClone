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
                    <img src='https://getir.com/_next/static/images/water-1-293b9ae905fc9a13bd597a5512813e31.jpg' />
                </figure>

            </Slider>
            <div className='content'>

                <div className='getir-title'>
                    <h1><span>getir</span>su</h1>
                    <h3>Gece gündüz kapınıza gelen su</h3>
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
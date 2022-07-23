import React, { useState } from 'react'
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { BiCurrentLocation, BiSearchAlt2 } from "react-icons/bi"
import "Style/foodHero.scss";



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
        speed: 1000,
        autoplaySpeed: 7000,
        cssEase: "linear"
    };
    return (
        <section>

            {/* <Slider {...settings} className="slider">
                <figure>
                    <video playsInline outoplay="true" src='https://getir.com/videos/1-hamburger.mp4' ></video>
                </figure>
                <figure>
                    <video playsInline outoplay="true" src='https://getir.com/videos/2-doner.mp4' ></video>
                </figure>
                <figure>
                    <video playsInline outoplay="true" src='https://getir.com/videos/3-pide.mp4' ></video>
                </figure>
                <figure>
                    <video playsInline outoplay="true" src='https://getir.com/videos/4-pizza.mp4' ></video>
                </figure>
                <figure>
                    <video playsInline outoplay="true" src='https://getir.com/videos/5-kunefe.mp4' ></video>
                </figure>
            </Slider> */}
            <div className='content'>


                <div className='location'>
                    <h4>Adresine getiren restoranları gör</h4>
                    <div className='location-input'>
                        <div className='search-icon'><BiSearchAlt2 size={20} /></div>
                        <input placeholder='Örn. Etiler mh.' />
                        <div className='location-icon'>
                            <BiCurrentLocation />
                            <span>Konumumu bul</span>
                        </div>
                    </div>
                    <div className='and'>
                        <span></span>
                        <h3>veya</h3>
                        <span></span>
                    </div>
                    <h6>Giriş yap veya kayıt ol</h6>
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
import React, { Component } from 'react'
import Slider from 'react-slick'
import { GrFormPrevious, GrFormNext } from "react-icons/gr"


function NextBtn(props) {
    const { className, style, onClick } = props;
    return (
        <button className={className}
            style={{ ...style, display: "block", background: "green", cursor: "pointer", color: "blue" }}
            onClick={onClick}
        >dsadasddbjsakdbasklsssssssssssssssssssssssssss
            {/* <GrFormNext size={22} /> */}
        </button>
    );
}

function PrevBtn(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{ ...style, display: "block", background: "green", cursor: "pointer" }}
            onClick={onClick}
        >
            <GrFormPrevious size={50} />
        </button>
    );
}


const Category = ({ kitchen }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 10000,
        cssEase: "linear",
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />
    };
    return (
        <Slider {...settings}>
            <a className='product'>
                <img className='product-image' src={kitchen.image} alt={kitchen.title} />
                <p>{kitchen.title}</p>
            </a>

        </Slider>
    )
}

export default Category
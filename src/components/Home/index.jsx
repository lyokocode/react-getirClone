import React from 'react'
import HeroSection from "components/Home/HeroSection";
import Header from "components/Header";
import Categories from "components/Home/Categories";
import Campaigns from "components/Home/Campaigns";
import Contact from "components/Home/Contact";
import Presentation from 'components/Food/Presentation';

const index = () => {
    return (
        <div>
            {/* <Header /> */}
            <HeroSection />
            <Categories />
            <Campaigns />
            <Contact />
            <Presentation />
        </div>
    )
}

export default index
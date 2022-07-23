import Presentation from 'components/Food/Presentation'
import Categories from 'components/Home/Categories'
import Contact from 'components/Home/Contact'
import React from 'react'
import HeroSection from './HeroSection'

const index = () => {
    return (
        <>
            <HeroSection />
            <Categories />
            <Contact />
            <Presentation />
        </>
    )
}

export default index
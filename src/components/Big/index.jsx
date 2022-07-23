import React from 'react'
import Campaigns from './Campaigns'
import Categories from 'components/Home/Categories'
import HeroSection from './HeroSection'
import Contact from 'components/Home/Contact'
import Presentation from 'components/Food/Presentation'

const index = () => {
    return (
        <div>
            <HeroSection />
            <Categories />
            <Campaigns />
            <Contact />
            <Presentation />

        </div>
    )
}

export default index
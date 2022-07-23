import Campaigns from 'components/Big/Campaigns'
import Presentation from 'components/Food/Presentation'
import Contact from 'components/Home/Contact'
import React from 'react'
import HeroSection from './HeroSection'

const index = () => {
    return (
        <>
            <HeroSection />
            <Campaigns />
            <Contact />
            <Presentation />
        </>
    )
}

export default index
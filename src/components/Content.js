import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from 'components/Home'
import Food from 'components/Food'
import Big from 'components/Big'
import Water from 'components/Water'
import Bazaar from 'components/Bazaar'

const Content = () => {
    return (
        <main className='content-main'>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/food" element={<Food />} />
                <Route exact path="/big" element={<Big />} />
                <Route exact path="/water" element={<Water />} />
                <Route exact path="/bazaar" element={<Bazaar />} />


            </Routes>

        </main>
    )
}

export default Content
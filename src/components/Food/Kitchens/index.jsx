import React, { useState, useEffect } from 'react'
import kitchenData from "api/kitchen.json"
import Kitchen from './Kitchen'
import "Style/kitchen.scss"


const Kitchens = () => {

    const [kitchens, setKitchens] = useState([])

    useEffect(() => {
        setKitchens(kitchenData)
    }, [])

    return (
        <main className='kitchen'>
            <div className='container'>
                <h5>Mutfaklar</h5>
                <div className='product-container'>
                    {kitchens && kitchens.map(kitchen => <Kitchen key={kitchen.id} kitchen={kitchen} />)}
                </div>
            </div>
        </main>
    )
}

export default Kitchens

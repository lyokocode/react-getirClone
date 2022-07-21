import React, { useState, useEffect } from 'react'
import "Style/categories.scss"
import categoryData from "api/categories.json"
import Category from './Category'

const Categories
    = () => {

        const [categories, setCategories] = useState([])

        useEffect(() => {
            setCategories(categoryData)
        }, [])

        return (
            <main className='categories'>
                <div className='container'>
                    <h5>Kategoriler</h5>
                    <div className='product-container'>
                        {categories && categories.map(category => <Category key={category.id} category={category} />)}
                    </div>
                </div>
            </main>
        )
    }

export default Categories

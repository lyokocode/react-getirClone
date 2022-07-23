import React from 'react'

const Category = ({ category }) => {
    return (
        <a className='product'>
            <img className='product-image' src={category.image} alt={category.title} />
            <p>{category.title}</p>
        </a>
    )
}

export default Category
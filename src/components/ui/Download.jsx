import React from 'react'
import { AiFillApple } from "react-icons/ai"
import { IoLogoGooglePlaystore } from "react-icons/io"
import "Style/download.scss"

const Download = () => {
    return (
        <aside className='download'>
            <a href='#' className='container'>
                <span className='icon'> <AiFillApple size={28} /></span>
                <div>
                    <h3 className='href'>APP Store'dan </h3>
                    <p>indirin</p>
                </div>
            </a>
            <a href='#' className='container'>
                <span className='icon'> <AiFillApple size={28} /></span>
                <div>
                    <h3 className='href'>Google Play </h3>
                    <p>'den alın</p>
                </div>
            </a>
            <a href='#' className='container'>
                <span className='icon'> <AiFillApple size={28} /></span>
                <div>
                    <h3 className='href'>AppGallery </h3>
                    <p>ile keşfedin</p>
                </div>
            </a>
        </aside>
    )
}

export default Download
import Download from 'components/ui/Download'
import React from 'react'
import "Style/contact.scss"

const Contact = () => {
    return (
        <main className='contact-getir'>
            <div className='content'>
                <h2>Getir'i indirin!</h2>
                <h6>İstediğiniz ürünü dakikalar içerisinde kapınıza getirelim</h6>
                <Download />
            </div>
            <figure>
                <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" />
            </figure>

        </main>
    )
}

export default Contact
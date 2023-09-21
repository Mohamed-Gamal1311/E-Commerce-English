import React from 'react'
import './Footer.css'
const Footer = (props) => {
    return (
        <div className='footer1'>
            <div className='container'>
                <div className='footer1-cont'>
                    <div className='cart-footer'>
                        <div className='icon-footer'><i class="fa-solid fa-location-dot"></i></div>
                        <div className='text-footer'>Bani Suef-Ihnasya-Bani hany</div>
                    </div>
                    <div className='cart-footer'>
                        <div className='icon-footer'><i class="fa-solid fa-phone"></i></div>
                        <div className='text-footer'>Telephone-01157949107</div>
                    </div>
                    <div className='cart-footer'>
                        <div className='icon-footer'><i class="fa-solid fa-envelope"></i></div>
                        <div className='text-footer'>ga29@gmail.com</div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer

import React from 'react'
import './Boxs.css'

const Boxs = (props) => {
    return (
        <div className='boxs'>
            <div className='Container'>
                <div className='boxcon'>
                    <div className='box'>
                        <div className='icon'><i class="fa-solid fa-bolt"></i></div>
                        <div className='text'>
                            <h6> Fast Delivery</h6>
                            <p> Start From $10</p>
                        </div>

                    </div>
                    <div className='box'>
                        <div className='icon'><i class="fa-regular fa-money-bill-1"></i></div>

                        <div className='text'>
                            <h6>Payment</h6>
                            <p> Secure System</p>
                        </div>

                    </div>
                    <div className='box'>
                        
                        <div className='icon'><i class="fa-solid fa-star"></i></div>
                        <div className='text'>
                            <h6>Money Guarantee</h6>
                            <p>7 Day Back</p></div>
                    </div>
                    <div className='box'>
                        <div className='icon'><i class="fa-regular fa-clock"></i></div> 

                        <div className='text'><h6>365 Days</h6>
                        <p>For Free Return</p></div>
                        
                        </div>

                </div>

            </div>



        </div>
     
        
    )
}

export default Boxs

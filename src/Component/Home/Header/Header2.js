import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Header2.css'

const Header2 = (props) => {
    const Navigate = useNavigate()
    return (
        <div className='Header2'>
            <div className='Container'>
                <div className='Header-cont'>
                 <Link to='/Cart'><i class="fa-solid fa-cart-shopping"></i></Link>
                    <div className='parent'>
                        <input type="text" placeholder='search............' />
                  

                        <select>
                            <option>catogry</option>
                            <option>women</option>
                            <option>man</option>

                        </select>
                    </div>

                    <div className='icon-header2'>
                      <i class="shopp fa-solid fa-cart-shopping"></i>
                       <Link to='/Login'> <i class="user fa-regular fa-user"></i><span>log-out</span></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header2

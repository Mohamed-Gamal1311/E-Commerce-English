import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header3.css'
const Header3 = (props) => {
    const [open,close]=useState(false)
    const[Open,SetOpen]=useState(false)
    const Navigate = useNavigate()
    useEffect(() => {
      if (sessionStorage.getItem('email') === '' || sessionStorage.getItem('email') === null) {
        Navigate('/login')
      }
    }, [])
    return (
        <div className='Header3'>
            <div className='Container'>
                <div className='Header3-cont'>




                    <div className='parent-h3'>
                    <button className='btn-Header3' onClick={() => open ? close(false) : close(true)}>
                        <i class=" window fa-brands fa-microsoft"></i>
                           
                          <p className='text'> Catogry</p>
                        <i class="arrow fa-solid fa-chevron-down"></i>
                    </button>
                    <div className='menu-Header3' style={{ display: open ? "block" : "none" }}>
                        <div className='bicycle'>
                            <i class="icon-by fa-solid fa-bicycle"></i>
                            bicycle
                        </div>

                        <div className='Clothe'>
                            <i class="fa-solid fa-shirt"></i>
                             Clothe
                        </div>
                        <div className='electronic'>
                            <i class="fa-solid fa-laptop-medical"></i>
                             electronic
                        </div>


                    </div>
                    </div>
                    <div className='ggggg'>
                   <ul style={{right:Open? '0':'-300px'}}>
                    <li onClick={()=>{Open?SetOpen(false):SetOpen(true)}}>Home</li>
                    <li onClick={()=>{Open?SetOpen(false):SetOpen(true)}}>menu page</li>
                    <li onClick={()=>{Open?SetOpen(false):SetOpen(true)}}>pages</li>
                    <li onClick={()=>{Open?SetOpen(false):SetOpen(true)}}>user acount</li>
                    
                   </ul>
                 </div>
                 <div className='icon-menu' onClick={()=>{Open?SetOpen(false):SetOpen(true)}}><i class="fa-solid fa-bars" ></i></div>
                </div>

            </div>
        </div>
    )
}

export default Header3

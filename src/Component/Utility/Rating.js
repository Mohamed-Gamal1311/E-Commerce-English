import { hover } from '@testing-library/user-event/dist/hover'
import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './Rating.css'
const Rating = (props) => {
    const [rating,setrating]=useState(null)
    const [hover,sethover]=useState(null)
    return (
        <div className='rating'>
            {[...Array(5)].map((star,index)=>{
                  const currentrating =index+1
                  return (
                    <label>
                        <input type="radio" name='rating' value={currentrating}
                        
                        onClick={()=>setrating(currentrating)}/>
                    <FaStar className='star' color={currentrating <=(hover||rating)?"#ffc107":"#e4e5e9"}
                      onMouseEnter={()=>sethover(currentrating)}
                      onMouseMove={()=>sethover(null)}
                    
                    />
                    </label>
                    
                    )
              })}
              <p>Your Rating is{rating}</p>
        </div>
    )
}

export default Rating

import React from 'react'
import './Darktheme.css'
const Darktheme = (props) => {
    const setDark=()=>{
        document.querySelector("body").setAttribute("data-theme","dark");
    };
    const setDLight=()=>{
        document.querySelector("body").setAttribute("data-theme","light");
    };
    const toggletheme=(e)=>{
       if(e.target.checked) setDark() ;
       else
       setDLight()
    }
    return (
        <div className='toggle'>

            <input type="checkbox"  onChange={toggletheme}/>
         
            <label className='icon'>
            
          
           <i class="sun fa-solid fa-sun"></i> 
            <i class="moon fa-solid fa-moon"></i>
           </label>
          
        </div>
    )
}

export default Darktheme


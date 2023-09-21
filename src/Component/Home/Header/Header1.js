
import Imageh1 from './Header1image/Capture.PNG'
import Imageh2 from './Header1image/Capture1.PNG'
import './Header1.css'
import '../../../Component/Style.css'
import Darktheme from './Darktheme/Darktheme'

const Header1 = (props) => {
    
   
    return (
        <div className='dark'>
        <div className='Header1'>

           <div className='Container'>
                <div className='Header1-cont'>
                    <div className='text-Header1'>
                        <button>Hot</button>
                       <span>free express shipping</span>
                    </div>

                    <ul className='link-Header1'>
                        <li><Darktheme/></li>
                        <li >
                            <select className='lang'>
                                <option>En</option>
                                <option>Ar</option>
                            </select>
                        </li>
                        <li><i class="fa-brands fa-twitter"></i></li>
                        <li><i class="fa-brands fa-facebook-f"></i></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
      
    )
}

export default Header1

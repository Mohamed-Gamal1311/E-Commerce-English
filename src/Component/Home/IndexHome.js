
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Boxs from './Boxes/Boxs'
import Footer from './Footer/Footer'
import Header1 from './Header/Header1'
import Header2 from './Header/Header2'
import Header3 from './Header/Header3'
import Product from './Product/Product'
import Slider from './Slider/Slider'


const IndexHome = (props) => {
    const Navigate=useNavigate()
    useEffect(()=>{
     if(sessionStorage.getItem('email') === ''|| sessionStorage.getItem('email')===null){
       Navigate('/login')
     }
    },[])
   
    return (
        <div>
       <Header2/>
       <Slider/>
       <Boxs/>
       <Product/>
       <Footer/>
       </div>
    )
}

export default IndexHome

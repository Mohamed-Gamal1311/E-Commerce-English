import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Dashboard.css'

const Sidebar = (props) => {
    const [products, setProducts] = useState([]);
    const [isShowingProducts, setIsShowingProducts] = useState(false);
   const handleDelete=(id)=>{
    fetch("http://localhost:5000/product/"+id ,{
        method:'DELETE',})
   }
    const handleButtonClick = () => {
        if (isShowingProducts) {
            // إخفاء المنتجات إذا كانت مرئية
            setIsShowingProducts(false);
            setProducts([]);
        } else {
            // استدعاء API لاسترداد المنتجات إذا لم تكن مرئية
            fetch('http://localhost:5000/product')
                .then(response => response.json())
                .then(data => {
                    // تحديث حالة المنتجات بالبيانات المستردة
                    setProducts(data);
                    setIsShowingProducts(true);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    };

    return (
        <div className='Dashboard'>
            <div className='menu-cont'>
                <div className='menu'>
                    <div className='menu-bar'>
                        <ul>
                            <li><h3>Mohamed</h3></li>
                            <li ><i class="fa-solid fa-house"></i>
                                <h4>Dashboard</h4>
                            </li>
                            <li><i class="fa-solid fa-user-group"></i>
                                <h4>Users</h4>
                            </li>
                            <li><i class="fa-brands fa-product-hunt"></i>

                                <h4>Product</h4>
                            </li>
                            <li><i class="fa-solid fa-gear"></i>
                                <h4>Setting</h4>
                            </li>
                            <li><i class="fa-solid fa-star"></i>
                                <h4>Favourite</h4></li>
                                <Link to="/Login"> <li className='Log-out'><i class="fa-solid fa-right-from-bracket"></i>
                                <h4> Log-Out</h4></li></Link>
                        </ul>
                    </div>

                </div>
                <div className='Header'>
                   <h3 >Dashboard</h3>
                    <div className='Boxes'>
                        <div className='Box'>
                            <i class=" icon-dash fa-solid fa-user"></i>
                            <div >
                                <p className='text-dash'>user</p>
                                <p>100</p>
                            </div>


                        </div>
                        <div className='Box' onClick={handleButtonClick}>
                            <i class="icon-dash fa-brands fa-product-hunt"></i>
                            <div>
                                <p className='text-dash'>Product</p>
                                <p>100</p>
                            </div>


                        </div>
                        <div className='Box'>
                            <i class="icon-dash fa-solid fa-border-all"></i>
                            <div>
                                <p className='text-dash'>Order</p>
                                <p>100</p>
                            </div>


                        </div>
                        <div className='Box'>
                            <i class="icon-dash fa-solid fa-pen"></i>
                            <div>
                                <p className='text-dash'>Post</p>
                                <p>100</p>
                            </div>

                            
                        </div>
                        
                        <div className='cards-dash' style={{display:isShowingProducts? "block":"none"}}>
                           <div className='title-dash'>Product</div>
                           <div className='header-product'>
                                        
                                        <p>Product</p>
                                        <p>Price</p>
                                       
                                        <p>Delete</p>
                                        <p>Update</p>
                                    </div>
                            {products.map(i => (
                                <div className='card-dash'>
                                   
                                <p key={i.id} className='title-dash'>{i.title}</p>
                                <p>{i.price}$</p>
                             
                                <p className='Delete'><i class="fa-solid fa-trash" onClick={()=>handleDelete(i.id)}></i></p>
                                <p className='Update'><Link to={`/Editprouduct/${i.id}`} ><i class="fa-solid fa-pen-to-square" ></i></Link></p>
                                </div>
                             ))}
                             <Link to='/Createproduct' ><button className='Add' >Add</button></Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Sidebar

import React, { useContext, useEffect, useState } from 'react'
import { ShoppingContext } from '../../../Contxt/Context'



import './Cart.css'


const Cart = () => {
    const [record, setrecord] = useState([])



    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(Response => Response.json())
            .then(data => setrecord(data))
            .catch(err => console(err))
    })
    const { cardItems, removeItem } = useContext(ShoppingContext)

    var total = 0;
    var price
    return (
        <div className='Cart'>
            <div className='Container'>
                <h1 className='car-title'>Cart Page    <i class="fa-solid fa-cart-shopping"></i></h1>

                <div className='position-cart'>
                    <div className='header-cart'>
                        <h2 className='prouduct-cart'>Product</h2>
                        <h2>Title</h2>
                        <h2>Price</h2>
                        <h2>Quantity</h2>
                        <h2 >Total</h2>
                        <h2 className='delet-cart'>Delete</h2>
                    </div>
                    {record.map((i) => (
                        <div className='cart-con'>

                            {cardItems.map((j) => (
                                <div>

                                    {i.id === j.id &&
                                        <div className='cart-ppp'>

                                            <div className='cart-cards'>

                                                <div className='text-cart'>
                                                    <div className='Box-cart image'><img src={i.image} alt="hjj" /></div>
                                                    <h3 className='Box-cart title'>{i.title}</h3>
                                                    <h3 className='Box-cart price'> {i.price}</h3>
                                                    <h3 className='Box-cart quantity'>{j.quantity}</h3>
                                                    <h3 className='Box-cart total'> {price = i.price * j.quantity}</h3>
                                             
                                                    <h3 className='Box-cart delet'><i className="fa-solid fa-trash" onClick={() => removeItem(i.id)} ></i></h3>

                                                </div>

                                            </div>

                                        </div>
                                    }
                                </div>
                            ))}

                        </div>

                    ))}
                   <div className='display-none'> {total=total+price}</div>
                    {total > 0 ? (
                        <div className='total-bill' >
                            <h1 className='para-cart'> Summary Cart</h1>
                            <hr />
                            <div className='flex-cart'>
                                <h3>SubTotal</h3>
                                <h3 className='total'> {total}$</h3>

                            </div>
                            <div className='btn-buy'><button >Complete Your Purchase</button></div>
                        </div>
                    ) :
                        <h1 className='message'>Your Cart Is Empty </h1>
                    }
                </div>
            </div>


        </div >
    )
}

export default Cart
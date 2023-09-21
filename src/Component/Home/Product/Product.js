import React, { useEffect, useState } from 'react'
import Rating from '../../Utility/Rating'
import Utility from '../../Utility/Rating'
import './Product.css'
import { Link } from 'react-router-dom'

const Product = (props) => {
    const [record, setrecord] = useState([])



    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(Response => Response.json())
            .then(data => setrecord(data))
            .catch(err => console(err))
    })

    return (
        <div className='product'>
            <div className='Container'>
                <div className='product-cont'>
                    <div className='Header-catogry'>
                        <h1>Select Product</h1>
                        <div className='buttons'> <button >All Catogry</button>
                            <button >Men</button>
                            <button >Women</button></div>
                    </div>
                    <div className='cards'>




                        {record.map((i) => (
                            <div className='card' key={i.id}>
                                <div className='image-product'><img src={i.image} /></div>
                                <div className='tit-pri'><h4>{i.title}</h4>
                                    <h6>{i.price}$</h6>

                                </div>
                                <p>{i.discription}</p>
                                <div className='car-rat'>
                                    <Link to={`/Singleproduct/${i.id}`} className='btn-buy' key={i.id}> <h6>Add to Cart</h6>     </Link>
                                    <Rating />

                                </div>
                            </div>


                        ))}</div>

                </div>
            </div>

        </div>
    )
}

export default Product

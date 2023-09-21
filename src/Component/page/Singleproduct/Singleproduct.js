import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingContext } from '../../../Contxt/Context';

import './Singleproduct.css';

const Singleproduct = () => {
  const [record, setRecord] = useState([]);
  const { id } = useParams();
  const { increaseCardQuantity, decreaseCardQuantity, getItemsQuantity, removeItem } = useContext(ShoppingContext);

  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then(response => response.json())
      .then(data => setRecord(data))
      .catch(err => console.log(err));
  }, []);

  const mostse = record.find(p => p.id === +id || p.id === id);

  return (
    <div className='single-product'>
      <div className='container'>
        <div className='single-cont'>
          <div className='single-im'>
            <img src={mostse?.image} />
          </div>
          <div className='discription'>
            <h1>{mostse?.title}</h1>
            <h5>{mostse?.price}$</h5>
            <p>{mostse?.discription}</p>
           
            {getItemsQuantity(mostse?.id) > 0 ? (
              <div className='ppppsin'>
                <p className='incr' onClick={() => increaseCardQuantity(mostse.id)}><i class="fa-solid fa-plus"></i></p>
                <span className='get'>{getItemsQuantity(mostse.id)}</span>
                <p className='decr' onClick={() => decreaseCardQuantity(mostse.id)}><i class="fa-solid fa-minus"></i></p>
                <br />
                <button className='remove' onClick={() => removeItem(mostse.id)}>Delete</button>
              </div>
            ) : (
              <button onClick={() => increaseCardQuantity(mostse?.id)} className='cart-sin'>
                <i class="fa-solid fa-cart-shopping"></i> Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singleproduct;

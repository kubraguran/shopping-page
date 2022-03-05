import {useState} from 'react';

const Men = ({handleAddProducts,menItems}) => {
  return (
      <div className='products'>
      <div className='products-page'>
          {menItems.map((manItem) => (
            <div key = {manItem.id}>
              <img src = {manItem.image}  className='products-image'/>
              <div>
              <button  className='btn'onClick={() => handleAddProducts(manItem)}>add to cart</button>
              <h2 className='price'>
                ${manItem.price}
                </h2>
              <form className='colors'>
                  <input type="color" disabled
             value="#465BF0">
            </input>
            <input type="color" disabled
             value="#f7f7f7">
            </input>
            <input type="color" disabled
             value="#222121">
            </input>
                  </form>
                <div>
                <p className='desc'>
                {manItem.desc}
                </p>
                </div>
                <span>
                   </span>
         </div>
              </div>
              
          ))}
      </div>
      </div>
  )
};

export default Men;

import {useState} from 'react';

const Women = ({womenItems,handleAddProducts}) => {
  return (
<div className='products'>
      <div className='products-page'>
          {womenItems.map((womanItem) => (
            <div key = {womanItem.id}>
              <img src = {womanItem.image} className='products-image'/>
              <div>
              <button  className='btn'onClick={() => handleAddProducts(womanItem)}>add to cart</button>
              <h2 className='price'>
                ${womanItem.price}
                </h2>
              <form className='colors'>
                  <input type="color" disabled 
             value="#e66465">
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
                {womanItem.desc}
                </p>
                </div> 
                <br/>
                <span>
                   </span>
               </div>
              </div>
              
          ))}
      </div>
      </div>
  );
};

export default Women;

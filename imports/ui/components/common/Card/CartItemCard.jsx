import React, { useEffect, useState } from 'react';

const CartItemCard = ({id, desc, price, img, quantity}) => {

  return (
    <div className='cart-item-card-container'>
      <img src={img} alt="" />
      <div>{desc}</div>
      <div>{price}</div>
      <div>{quantity}</div>
      <div>{price*quantity}</div>
    </div>
  )
}

export default CartItemCard;
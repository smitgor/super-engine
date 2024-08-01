import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItemCard from '../../components/common/Card/CartItemCard';
import SuccessError from '../../components/common/SuccessError';
const Cart = () => {
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const cartItems = useSelector((state) => {
    return state.cart.cartItems
  });

  // useEffect(()=>{
  // },[])

  function closeModal(){
    setShowModal(false)
    Meteor.call("placeOrder",cartItems)
  }
  return (
    <div className="container">
      <h2>Your Shopping Cart</h2>
      <div className='item-table'>
        { cartItems && cartItems.map((ele)=>(
          <div className='cart-item-card-container' key={ele.id}>
            <img src={ele.img} alt="" />
            <div>{ele.desc}</div>
            <div>{ele.price} x {ele.quantity}</div>
            <div>{ele.price*ele.quantity}</div>
          </div>
        ))}
      </div>
      <div className='total'>
        <div>Total: { cartItems && cartItems.reduce((a,b)=>(a+(b.quantity*b.price)),0)}</div>
        <button onClick={()=>{setShowModal(true)}}>Checkout and Pay</button>
      </div>
      {showModal &&  
        <SuccessError type="success" message="Order placed successfully" okHandler={closeModal}/>
      }
    </div>
  );
};
export default Cart;

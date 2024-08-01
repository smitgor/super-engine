import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateCartItem,
  addCartItem,
  removeCartItem,
} from '../../../store/features/cart'

const ItemCard = ({id, desc, img, price}) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0)
  const cartItems = useSelector((state) => {
    return state.cart.cartItems
  });

  useEffect(()=>{
    const item = cartItems.find((ele)=>(ele.id===id))
    if(item) {
      setCount(item.quantity)
    }
    else{
      setCount(0)
    }
  },[cartItems])

  const addItem = () => {

    dispatch(updateCartItem({id, quantity:1}))
  };
  const addItemInCart = () => {

    dispatch(addCartItem({id, desc, price, img}))
  };
  const removeItem = () => {
    if(count===1)
    {
      dispatch(removeCartItem(id))
    } else {
      dispatch(updateCartItem({id, quantity:-1}))
    }
  };
  return (
    <div className="item-card">
      <img src={img} alt="" />
      <div className="item-details">{desc}</div>
      <div className="price-and-counter">
        <div className="price">₹{price}</div>
        {count === 0 && (
          <div className="counter">
            <button className="item-add-btn" onClick={addItemInCart}>
              Add
            </button>
          </div>
        )}
        {count !== 0 && (
          <div className="counter">
            <button className="count-minus-button" onClick={removeItem}>
              -
            </button>
            <span>{count}</span>
            <button className="count-add-button" onClick={addItem}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ItemCard;



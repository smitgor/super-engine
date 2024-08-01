import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ItemCard from '../../components/common/Card/ItemCard';
import CartItemCard from '../../components/common/Card/CartItemCard';
import Loading from '../../components/common/Loading';

const ShopPage = () => {

  const [shopDetails, setShopDetails] = useState('')
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const cartItems = useSelector((state) => {
    return state.cart.cartItems
  });
  const {shopId} = useParams();
  useEffect(()=>{
    console.log("🚀 ~ useEffect ~ shopId:", shopId)
    setLoading(true)
    Meteor.call('getShopItem',shopId,(err, res) => {
      if(!err){
        console.log("🚀 ~ Meteor.call ~ res:", res)
        setShopDetails(res)
        setLoading(false)
      }
      else{
        console.log("🚀 ~ Meteor.call ~ err:", err)
        setLoading(false)
      }
    })
  },[])
  useEffect(()=>{
    if(cartItems.length){
      console.log("🚀 ~ useEffect ~ cartItems:", cartItems)
      const test = cartItems.reduce((a,b)=>(a+b.quantity),0)
      console.log("🚀 ~ useEffect ~ test:", test)
      setCount(test)
    }
    else{
      setCount(0)
    }
  },[cartItems])
  if(loading)
    return <Loading loadingText="Loading" />
  return (
    <div className="shop-home-page">
      <h1 className="shop-name">{shopDetails.name}</h1>
      <div className="available-items-box">
        <h2 className="available-items">Available items</h2>
        <input className="shop-item-search" type="text" />
      </div>
      <div className='items-container'>
        {shopDetails && shopDetails.items && shopDetails.items.map((ele)=>(
          <ItemCard key={ele._id} id={ele._id} desc={ele.desc} price={ele.price} img={ele.img}  />
          ))
        }

      </div>
      <Link to="/cart">
        <div className='cart-cta'>
          Go To Cart: {count}
        </div>
      </Link>
    </div>
  );
};
export default ShopPage;

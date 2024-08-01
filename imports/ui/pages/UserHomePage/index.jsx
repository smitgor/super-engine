import React, { useEffect, useState } from 'react';
import Loading from '../../components/common/Loading';
import Order from '../Orders/List/order';

const UserHomePage = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    Meteor.call("getUserOrderHistory",(err, res) => {
      if(!err){
        console.log("🚀 ~ Meteor.call ~ res:", res)	
        setOrders(res)
        setLoading(false)
      }
      else{
        console.log(err)
        setLoading(false)
      }
    	
    })
  },[])

  if(loading)
    return (
      <div className='user-home-page'>
        <h2>Order History</h2>
        <Loading loadingText="Loading" />
      </div>
    )

  return (
    <div className='user-home-page'>
      <div className='user-details'>
        <h2>User Details</h2>
        {/* <div className='name-box'>
          <img src="/icons/user.png" alt="" />
          <p>Name: Smit Gor</p>
        </div>
        <div className='contact-box'>
          <img src="/icons/books.png" alt="" />
          <p>Contact details: 9293903029</p>
        </div>
        <div className='address-box'>
          <img src="/icons/home.png" alt="" />
          <p>Address: 21/2 1st Sector HSR layout, Bangalore</p>
        </div> */}
        {/*  */}
        <div className='user-box'>
          <img src="/icons/avatar.png" alt="" />
          <div className='user-info'>
            <div>Smit Gor</div>
            <div>9293903029 | smitgor@gmail.com</div>
            <div>21/2 1st Sector HSR layout, Bangalore</div>
          </div>
        </div>
      </div>
      <h2>Order History</h2>
      <div className="order-list">
        { orders && orders.map((ele)=>(
          <Order key={ele._id} cartValue={ele.cartValue} createdAt={ele.createdAt} items={ele.items} />
        ))}
      </div>
    </div>
  )
}

export default UserHomePage;
import React, { useEffect, useState } from 'react';
import Loading from '../../components/common/Loading';

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
      <h2>Order History</h2>
      { orders && orders.map((ele)=>(
        <p>{ele.createdAt}</p>
        // <OrderCard />
      ))}
    </div>
  )
}

export default UserHomePage;
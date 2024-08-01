import Sources from '../../imports/api/models/sources';

const items = [
    {
        _id: 12,
        desc: "thi sis desc",
        price: '1548',
        img: "/items/beetroot.avif",
    },
    {
        _id: 13,
        desc: "thi sis desc",
        price: '1548',
        img: "/items/beetroot.avif",
    },
    {
        _id: 14,
        desc: "thi sis desc",
        price: '1548',
        img: "/items/beetroot.avif",
    },
    {
        _id: 15,
        desc: "thi sis desc",
        price: '1548',
        img: "/items/beetroot.avif",
    },
];

const shopDetails = {
  name:"Veda veggies",
  items,
}

Meteor.methods({
  getShopItem(_id) {
    console.log("🚀 ~ getShopItem ~ _id:", _id)
    
    return shopDetails;
    if (_id) {
        const shopDetails = Shops.findOne({ _id });
        if (shopDetails) {
            return shopDetails;
        }

        throw new Meteor.Error('SHOP_NOT_FOUND', "Shop doesn't exist.");
    }
    throw new Meteor.Error(
        'NO_SHOP_ID_SPECIFIED',
        'No shop id specified'
    );
  },
  placeOrder(orderDetails){
    console.log("🚀 ~ placeOrder ~ orderDetails:", typeof orderDetails,orderDetails)
    const user = Meteor.user()
    let cartValue = 0
    orderDetails.forEach((ele)=>{
      cartValue+=(ele.quantity*ele.price)
    })
    const data = {
      customer: user.username,
      userId:user._id,
      items: orderDetails,
      createdAt: new Date(),
      cartValue,
      paymentDetails: {
        method: 'CASH',
        isPaid: true,
      },
    }
    console.log("🚀 ~ placeOrder ~ data:", data)
  },
  getUserOrderHistory(){
    const user = Meteor.user();
    if(!user) return
    return [{
      customer: 'test',
      userId: 'gTWYyo4jNZCdvgpp2',
      items: [
        {
          id: 15,
          quantity: 1,
          desc: 'thi sis desc',
          price: '1548',
          img: '/items/beetroot.avif'
        },
        {
          id: 14,
          quantity: 1,
          desc: 'thi sis desc',
          price: '1548',
          img: '/items/beetroot.avif'
        },
        {
          id: 13,
          quantity: 3,
          desc: 'thi sis desc',
          price: '1548',
          img: '/items/beetroot.avif'
        }
      ],
      createdAt: "2024-08-01T15:35:53.316Z",
      cartValue: 7740,
      paymentDetails: { method: 'CASH', isPaid: true }
    },{
      customer: 'test',
      userId: 'gTWYyo4jNZCdvgpp2',
      items: [
        {
          id: 15,
          quantity: 1,
          desc: 'thi sis desc',
          price: '1548',
          img: '/items/beetroot.avif'
        },
        {
          id: 14,
          quantity: 4,
          desc: 'thi sis desc',
          price: '1548',
          img: '/items/beetroot.avif'
        },
        {
          id: 13,
          quantity: 3,
          desc: 'thi sis desc',
          price: '1548',
          img: '/items/beetroot.avif'
        }
      ],
      createdAt: "2024-08-01T15:35:53.316Z",
      cartValue: 2312,
      paymentDetails: { method: 'CASH', isPaid: true }
    }]
  }
});



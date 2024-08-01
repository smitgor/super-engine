import Sources from '../../imports/api/models/sources';

const items = [
    {
        _id: 'mushroom',
        desc: "Mushroom",
        price: '200',
        img: "/items/beetroot.avif",
    },
    {
        _id: 'ginger',
        desc: "Ginger",
        price: '150',
        img: "/items/beetroot.avif",
    },
    {
        _id: 'carrot',
        desc: "Carrot",
        price: '80',
        img: "/items/beetroot.avif",
        isOutOfStock: true
    },
    {
        _id: 'tomato',
        desc: "Tomato",
        price: '120',
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
    const items = orderDetails.map((ele)=>{
      cartValue+=(ele.quantity*ele.price)
      return {...ele, itemId:ele.id}
    })
    const data = {
      customer: user.username,
      userId:user._id,
      items,
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
      _id:"eukjaslaishdakl",
      customer: 'test',
      userId: 'gTWYyo4jNZCdvgpp2',
      items: [
        {
          itemId: 'potato',
          quantity: 1,
          desc: 'Potato',
          price: '1548',
          img: '/items/beetroot.avif'
        },
        {
          itemId: 'garlic',
          quantity: 3,
          desc: 'Garlic',
          price: '1548',
          img: '/items/beetroot.avif'
        },
        {
          itemId: 'mushroom',
          quantity: 1,
          desc: 'Mushroom',
          price: '1548',
          img: '/items/beetroot.avif'
        },
        {
          itemId: 'onion',
          quantity: 3,
          desc: 'Onion',
          price: '1548',
          img: '/items/beetroot.avif'
        },
      ],
      createdAt: "12AM, 22 July 2024",
      cartValue: 7740,
      paymentDetails: { method: 'CASH', isPaid: true }
    },{
      _id:"lekuhrkasjlsk",
      customer: 'test',
      userId: 'gTWYyo4jNZCdvgpp2',
      items: [
        {
          itemId: 'onion',
          quantity: 1,
          desc: 'thi sis desc',
          price: '1548',
          img: '/items/beetroot.avif'
        },
        {
          itemId: 'tomato',
          quantity: 4,
          desc: 'thi sis desc',
          price: '1548',
          img: '/items/beetroot.avif'
        },
        {
          itemId: 'potato',
          quantity: 3,
          desc: 'thi sis desc',
          price: '1548',
          img: '/items/beetroot.avif'
        }
      ],
      createdAt: "10AM, 22 July 2024",
      cartValue: 2312,
      paymentDetails: { method: 'CASH', isPaid: true }
    }]
  }
});



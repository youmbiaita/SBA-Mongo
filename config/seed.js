
const mongoose = require("./db-connection.js");
const User = require("../models/user");
const Menu = require("../models/menu");
const Order = require("../models/order");

// declare users
const users = [
  {
    name: "John Doe",
    email: "john@example.com",
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
  },
  { 
    name: "Alice", 
    email: "alice@example.com" 
  },
  { 
    name: "Bob", 
    email: "bob@example.com" 
  },
  {
    name: "Charlie", 
    email: "charlie@example.com" 
  },
];

//declare menus
const menus = [
  {
    
      name: 'Ndole',
      description: 'Fresh betterleaf with peanurs and cow meat, dry fish',
      price: 21,
      image: "https://i0.wp.com/afrovitalityeats.com/wp-content/uploads/2018/06/Cameroonian-Ndole-dish.jpg?ssl=1"
  },
  {
    
      name: 'Eru',
      description: 'leaves wirh palm oil and dry meats',
      price: 21,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Les_plats_du_Cameroun-2.jpg/300px-Les_plats_du_Cameroun-2.jpg"
  },
  {
    
      name: 'DG',
      description: 'Fresh green plantains and veggies',
      price: 20,
      image: "https://www.shutterstock.com/shutterstock/photos/2397909969/display_1500/stock-photo-poulet-dg-is-a-very-unique-easy-to-love-dish-it-features-an-unbeatable-combination-of-chicken-2397909969.jpg"
  },
  {
    
      name: 'Koki',
      description: 'blackeye beans',
      price: 18,
      image: "https://market.lamater.net/cdn/shop/articles/koki2.jpg?v=1620248102"
  },
  {
    
      name: 'Grilled fish',
      description: 'charcoal grilled fish with spices ',
      price: 20,
      image: "https://www.camerdish.com/wp-content/uploads/2022/05/Picture1651552943813-583x840.png"
  },
  {
    
      name: 'Salad',
      description: 'Fresh greens and veggies',
      price: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPRQPdb9S-s5R2ReTIWGh2pA9fPaE5AbXxxAxcNUC_w&s"
  },
  {
  
      name: 'puff puff',
      description: 'flour and sugar',
      price: 10,
      image: "https://i0.wp.com/laviebami.com/wp-content/uploads/2021/04/7f66d4_3e61e7fe33bb4bb1be6b154164b374b0mv2.jpg?resize=500%2C493&ssl=1"
  },
  {
  
      name: 'fried plantains or boiled plantain',
      description: 'fried plantains',
      price: 6,
      image: "https://cooltchop.com/logo/bccd94720f9aba3c.jpg"
  },
  {
  
      name: 'Bobolo',
      description: 'match cassava ',
      price: 5,
      image: "https://mammasamala.com/wp-content/uploads/2024/04/bobolo-e1712442725154.jpg"
  },
  {
   
      name: ' water foufou',
      description: 'cassava ',
      price: 5,
      image: "https://i.ytimg.com/vi/2K-FFs4R0as/maxresdefault.jpg"
  }
];

//declare orders
const orders = [
  {
    userId: "one",
      orderItems: [1, 8],
      total: 28,
      status: 'pending'
  },
  {
    userId: "two",
      orderItems: [3, 6],
       total: 26,
      status: 'completed'
  },
  {
    userId: "three",
      orderItems: [10],
       total: 20,
      status: 'completed'
  },
  {
    userId: "four",
      orderItems: [4,8],
       total: 26,
      status: 'pending'
  },
  {
    userId: "five",
      orderItems: [5,6,9],
       total: 31,
      status: 'pending'
  },
  {
    userId: "six",
      orderItems: [7],
       total: 10,
      status: 'completed'
  }

];


async function seed() {
  try {

  await Menu.deleteMany({});
  await Order.deleteMany({});
  await User.deleteMany({});

  const createdmenus = await Menu.create(menus)
  // console.log(createdmenus)
  const createdorders = await Order.create(orders)
  console.log(createdorders)
  const createdusers = await User.create(users)

  await mongoose.connection.close()
  } catch (error) {
    console.log(error)
  }


}

seed();

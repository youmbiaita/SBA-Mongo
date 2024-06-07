require("dotenv").config();
const mongoose = require("../config/db-connection");
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
  { name: "Charlie", 
    email: "charlie@example.com" 
  },
];

//declare menus
const menus = [
  {
      id: 1,
      name: 'Ndole',
      description: 'Fresh betterleaf with peanurs and cow meat, dry fish',
      price: 21,
      image: "https://i0.wp.com/afrovitalityeats.com/wp-content/uploads/2018/06/Cameroonian-Ndole-dish.jpg?ssl=1"
  },
  {
      id: 2,
      name: 'Eru',
      description: 'leaves wirh palm oil and dry meats',
      price: 21,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Les_plats_du_Cameroun-2.jpg/300px-Les_plats_du_Cameroun-2.jpg"
  },
  {
      id: 3,
      name: 'DG',
      description: 'Fresh green plantains and veggies',
      price: 20,
      image: "https://www.shutterstock.com/shutterstock/photos/2397909969/display_1500/stock-photo-poulet-dg-is-a-very-unique-easy-to-love-dish-it-features-an-unbeatable-combination-of-chicken-2397909969.jpg"
  },
  {
      id: 4,
      name: 'Koki',
      description: 'blackeye beans',
      price: 18,
      image: "https://market.lamater.net/cdn/shop/articles/koki2.jpg?v=1620248102"
  },
  {
      id: 5,
      name: 'Grilled fish',
      description: 'charcoal grilled fish with spices ',
      price: 20,
      image: "https://www.camerdish.com/wp-content/uploads/2022/05/Picture1651552943813-583x840.png"
  },
  {
      id: 6,
      name: 'Salad',
      description: 'Fresh greens and veggies',
      price: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPRQPdb9S-s5R2ReTIWGh2pA9fPaE5AbXxxAxcNUC_w&s"
  },
  {
      id: 7,
      name: 'puff puff',
      description: 'flour and sugar',
      price: 10,
      image: "https://i0.wp.com/laviebami.com/wp-content/uploads/2021/04/7f66d4_3e61e7fe33bb4bb1be6b154164b374b0mv2.jpg?resize=500%2C493&ssl=1"
  },
  {
      id: 8,
      name: 'fried plantains or boiled plantain',
      description: 'fried plantains',
      price: 6,
      image: "https://cooltchop.com/logo/bccd94720f9aba3c.jpg"
  },
  {
      id: 9,
      name: 'Bobolo',
      description: 'match cassava ',
      price: 5,
      image: "https://mammasamala.com/wp-content/uploads/2024/04/bobolo-e1712442725154.jpg"
  },
  {
      id: 10,
      name: ' water foufou',
      description: 'cassava ',
      price: 5,
      image: "https://i.ytimg.com/vi/2K-FFs4R0as/maxresdefault.jpg"
  }
];

//declare orders
const orders = [
  {
      id: 1,
      userId: 1,
      orderItems: [1, 8],
      total: 27,
      status: 'pending'
  },
  {
      id: 2,
      userId: 2,
      orderItems: [3, 10],
       total: 25,
      status: 'completed'
  },
  {
      id: 3,
      userId: 3,
      orderItems: [3],
       total: 20,
      status: 'completed'
  },
  {
      id: 4,
      userId: 4,
      orderItems: [4,8],
       total: 24,
      status: 'pending'
  },
  {
      id: 5,
      userId: 5,
      orderItems: [5,6,9],
       total: 31,
      status: 'pending'
  },
  {
      id: 6,
      userId: 7,
      orderItems: [7],
       total: 10,
      status: 'completed'
  }

];
module.exports = orders;

async function seed() {
  try {
    await mongoose.connection.dropDatabase();

     await User.insertMany(users);
     await Menu.insertMany(menus);

    // orders[0].userId = createdUsers[0]._id;
    // orders[0].orderItems.push(createdMenus[0]._id, createdMenus[1]._id);
    // orders[0].total = createdMenus[0].price + createdMenus[1].price;

    // orders[1].userId = createdUsers[1]._id;
    // orders[1].orderItems.push(createdMenus[2]._id, createdMenus[3]._id);
    // orders[1].total = createdMenus[2].price + createdMenus[3].price;

    await Order.insertMany(orders);
    await Menu.deleteMany(menus);
    await Order.deleteMany(orders);
    await User.deleteMany(users);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
}

seed();

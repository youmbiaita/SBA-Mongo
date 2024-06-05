require("dotenv").config();
const mongoose = require("../config/db-connection");
const User = require("../models/user");
const Menu = require("../models/menu");
const Order = require("../models/order");

const users = [
  {
    name: "John Doe",
    email: "john@example.com",
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
  },
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
  { name: "Charlie", email: "charlie@example.com" },
];

const menus = [
  {
    name: "Pizza",
    description: "Cheesy pizza",
    price: 9.99,
    image: "pizza.jpg",
  },
  {
    name: "Burger",
    description: "Juicy burger",
    price: 8.99,
    image: "burger.jpg",
  },
  {
    name: "Pasta",
    description: "Delicious pasta",
    price: 7.99,
    image: "pasta.jpg",
  },
  {
    name: "Salad",
    description: "Fresh salad",
    price: 6.99,
    image: "salad.jpg",
  },
  { name: "Soup", description: "Hot soup", price: 5.99, image: "soup.jpg" },
];

const orders = [
  {
    userId: "",
    orderItems: [],
    total: 0,
    status: "Pending",
  },
  {
    userId: "",
    orderItems: [],
    total: 0,
    status: "Completed",
  },
];

async function seed() {
  try {
    await mongoose.connection.dropDatabase();

    const createdUsers = await User.insertMany(users);
    const createdMenus = await Menu.insertMany(menus);

    orders[0].userId = createdUsers[0]._id;
    orders[0].orderItems.push(createdMenus[0]._id, createdMenus[1]._id);
    orders[0].total = createdMenus[0].price + createdMenus[1].price;

    orders[1].userId = createdUsers[1]._id;
    orders[1].orderItems.push(createdMenus[2]._id, createdMenus[3]._id);
    orders[1].total = createdMenus[2].price + createdMenus[3].price;

    await Order.insertMany(orders);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
}

seed();

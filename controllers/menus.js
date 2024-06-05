const Menu = require('../models/menu');

module.exports = {
  validateMenu,
  createMenu,
  getAllMenus,
  getMenById,
  updateMenuById,
  deleteMenuById,
};

//validation middleware
async function validateMenu(req, res) {
    const { name, description, price, image } = req.body;
    let message = "";
    if (!name) {
      message += 'name, ';
    }
    if (!description) {
      message += 'description, ';
    }
    if (!price) {
      message += 'price, ';
    }
    if (!image) {
      message += 'image.';
    }
  
    if(message != "") {
      return res.status(400).send("Missing field(s) required: " + message);
    }
  
   next();
  };


async function getAllMenus(req, res) {
  try {
    const { name, description, price, image } = req.query;
    let filteredMenus = menus;
  
    if (name) {
      filteredMenus = filteredMenus.filter(menu => menu.name.toLowerCase().includes(name.toLowerCase()));
    }
    if (description) {
      filteredMenus = filteredMenus.filter(menu => menu.description == description);
    }
    if (price) {
      filteredMenus = filteredMenus.filter(menu => menu.price == price);
    }
    if (image) {
      filteredMenus = filteredMenus.filter(menu => menu.image == image);
    }
  
    res.json(filteredMenus);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

async function createMenu(req, res) {
  const { name, description, price, image } = req.body;
  const menu = new Menu({ name, description, price, image });

  try {
    await menu.save();
    res.status(201).json(menu);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

async function getMenById(req, res) {
    try {
        const menu = menus.find(item => item.id === parseInt(req.params.id));

        if (!menu) return res.status(404).send('Menu item not found');
        res.json(menu);
      
    } catch (err) {
        res.status(400).json(err.message);
    }
}


async function updateMenuById(req, res) {
    try {
        const menu = menus.find(item => item.id === parseInt(req.params.id));
        if (!menu) return res.status(404).send('Menu item not found');
      
        menu.name = req.body.name || menu.name;
        menu.description = req.body.description || menu.description;
        menu.price = req.body.price || menu.price;
        menu.image = req.body.image || menu.image;
      
        res.json(menu);
    } catch (err) {
        res.status(400).json(err.message);
    }
}

async function deleteMenuById(req, res) {
    try {
        const menuItemIndex = menus.findIndex(item => item.id === parseInt(req.params.id));
  if (menuItemIndex === -1) return res.status(404).send('Menu item not found');

  const deletedMenuItem = menus.splice(menuItemIndex, 1);
  res.json(deletedMenuItem[0]);
    } catch (err) {
        res.status(400).json(err.message);
    }
}
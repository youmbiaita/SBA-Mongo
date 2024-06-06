const Menu = require('../models/menu');

module.exports = {
  validateMenu,
  createMenu,
  getAllMenus,
  getMenuById,
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
      const menus = await Menu.find();
      res.json(menus);
    } catch (err) {
      res.status(500).send(err.message);
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

async function getMenuById(req, res) {
    try {
      const menu = await Menu.findById(req.params.id);
      res.status(200).json(menu)      
    } catch (err) {
        res.status(400).json(err.message);
    }
}


async function updateMenuById(req, res) {
  try {
    const updatedMenu = await Menu.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedMenu);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function deleteMenuById(req, res) {
  try {
    await Menu.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: 'Successfully Deleted the Menu',
    });
  } catch (err) {
    res.status(400).send(err);
  }
}
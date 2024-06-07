
## Description
This API manages users, menus, and orders for my restaurant application. It provides CRUD operations for these entities.

## Routes

# Users
- **GET /users**: Retrieve all users.
- **POST /users**: Create a new user.
- **GET /users/:id**: Retrieve a user by ID.
- **PUT /users/:id**: Update a user by ID.
- **DELETE /users/:id**: Delete a user by ID.

### Menus
- **GET /menus**: Retrieve all menu items.
- **POST /menus**: Create a new menu item.
- **GET /menus/:id**: Retrieve a menu item by ID.
- **PUT /menus/:id**: Update a menu item by ID.
- **DELETE /menus/:id**: Delete a menu item by ID.

### Orders
- **GET /orders**: Retrieve all orders.
- **POST /orders**: Create a new order.
- **GET /orders/:id**: Retrieve an order by ID.
- **PUT /orders/:id**: Update an order by ID.
- **DELETE /orders/:id**: Delete an order by ID.

## Database Seeding
Run `node data/seed.js` to seed the database with sample data.

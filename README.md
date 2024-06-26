# Apollo-Level2-Assignment2-rudro987 Server

This is a server application built with Express.js, Typescript and Mongoose. It provides a RESTful API for managing orders and products.

## Getting Started

1. Clone the repository: git clone https://github.com/rudro987/apollo-level2-assignment2-rudro987.git

2. Install dependencies:
- cd apollo-level2-assignment2-rudro987
- npm install

3. Set up environment variables:

- Create a `.env` file in the root directory of the project and add the following variables:

- PORT=your-desired-port
- DATABASE_URL=your-mongodb-uri

- Or you can head over to the ./src/config/index.ts and directly input your mongodb uri and port

4. Start the server:

- npm run start:dev

- The server will start running on the specified port.

## API Endpoints

### Products

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get specific product using id
- `GET /api/products?searchTerm=<name>`: Get products by searching with the product name
- `POST /api/products`: Create a new product
- `PUT /api/products/:id`: Update a product
- `DELETE /api/products/:id`: Delete a product

### Orders

- `POST /api/orders`: Create a new order
- `GET /api/orders`: Get all orders
- `GET /api/orders?email=<email>`: Get specific orders using email

## Please share your thoughts about improvements

# Invoice Creator

## Description
Invoice Creator is a web application for generating invoices. It allows users to input invoice details such as invoice number, customer name, invoice date, due date, and payment method. Users can also add services, specify quantity, rate, discount, and tax for each service. The application calculates the total amount including taxes and discounts and provides an option to save the invoice.

## Usage
1. Start the server:
    ```bash
    cd server
    npm install
    npm start
    ```
2. Start the client application:
    ```bash
    cd client
    npm install
    npm run dev
    ```
3. Open your web browser and navigate to the following URLs:
   - Server: [http://localhost:3000](http://localhost:3000)
   - Client: [http://localhost:8000](http://localhost:5137)

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- React.js
- Redux
- HTML
- CSS

## Folder Structure
- `client`: Contains the frontend code built with React.js.
- `server`: Contains the backend code built with Node.js and Express.js.
- `db`: Contains MongoDB schema definitions.
- `routes`: Contains route definitions for the backend API.
- `models`: Contains Mongoose models for interacting with MongoDB.
- `public`: Contains static assets.

## Screenshots
### Setting up tax details
![Setting up tax details](/assets/screenshots/tax_details.png)
### Setting up tax and service details
![Setting up tax and service details](/assets/screenshots/service_details.png)
### Final outcome
![Final outcome](/assets/screenshots/final_outcome.png)

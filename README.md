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
   - Client: [http://localhost:8000](http://localhost:)

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
![Screenshot 2024-04-08 100107](https://github.com/kmaity-9563/Invoice_tax_creater/assets/75235204/d08fdfce-643e-47c7-8450-4b8536091cf0)
### Setting up tax and service details
![Screenshot 2024-04-08 100302](https://github.com/kmaity-9563/Invoice_tax_creater/assets/75235204/efae9da8-5713-48e4-90e6-a8085a8d700c)
### Final outcome
![Screenshot 2024-04-08 100823](https://github.com/kmaity-9563/Invoice_tax_creater/assets/75235204/f8820032-c79b-4f13-b9cc-5c59099af9d4)

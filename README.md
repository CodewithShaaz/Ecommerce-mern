# Ecommerce Full Stack Project

A full stack ecommerce web application built with React (frontend) and Node.js/Express (backend).
<img src="Overview/Ecommerce.gif" width="700" alt="Demo Video" />

## Features

- User authentication (Sign Up, Sign In)
- Product listing and details
- Shopping cart and orders
- Favourites and new arrivals
- Contact page
- Toast notifications
- Redux for state management

## Project Structure

```
Ecommerce/
	client/   # React frontend
	server/   # Node.js/Express backend
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/CodewithShaaz/Ecommercee.git
cd Ecommercee
```

### 2. Start the backend server

```bash
cd server
npm install
npm start
```

### 3. Start the frontend

```bash
cd client
npm install
npm start
```

### 4. Access the app

Open your browser and go to:  
`http://localhost:3000`

## Environment Variables

- Backend: You may need a `.env` file in `server/` for database connection and JWT secret.
- Frontend: API endpoints are configured in `client/src/api/index.js`.

## Technologies Used

- Frontend: React, Redux
- Backend: Node.js, Express, MongoDB (if configured)
- Styling: CSS

## Folder Details

- `client/src/components/` – Reusable UI components
- `client/src/pages/` – Main app pages
- `client/src/redux/` – State management
- `server/controllers/` – Route logic
- `server/models/` – Mongoose models
- `server/routes/` – API routes

## License

MIT

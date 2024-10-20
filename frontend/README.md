# Reparobot

Reparobot is a comprehensive solution for the maintenance and repair of Husqvarna and Gardena robotic lawnmowers. This project includes both a frontend and a backend, providing a seamless user experience for managing service requests and maintaining robotic lawnmowers.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [License](#license)

## Features

- **Service Management**: Users can submit service requests for their robotic lawnmowers.
- **Email Notifications**: Automatic email notifications for new service requests.
- **Responsive Design**: Frontend designed to be responsive and user-friendly.

## Technologies

### Frontend

- React
- TypeScript
- Material-UI
- Axios

### Backend

- Node.js
- Express
- Axios
- Winston (for logging)

## Installation

### Prerequisites

- Node.js (>= 20.0.0)
- npm

### Steps

1. Clone the repository

2. Install dependencies for both frontend and backend:
    ```bash
    cd frontend
    npm install
    cd ../backend
    npm install
    ```

3. Set up environment variables:

   Create a `.env` file in both `frontend` and `backend` directories with the following variables:

   **Frontend**:
    ```env
    REACT_APP_API_URL=<your_backend_api_url>
    REACT_APP_AUTH_TOKEN=<your_auth_token>
    ```

   **Backend**:
    ```env
    FRONTEND_URL=<your_frontend_url>
    API_URL=<your_api_url>
    SENDER=<your_email_sender_name>
    SENDER_EMAIL=<your_email_sender_address>
    TO_EMAIL=<your_email_recipient_address>
    TO=<your_email_recipient_name>
    API_KEY_BREVO=<your_brevo_api_key>
    ```

## Usage

### Running the Frontend

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2. Start the development server:
    ```bash
    npm start
    ```

### Running the Backend

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2. Start the server:
    ```bash
    npm run dev
    ```

## Scripts

### Frontend

- `start`: Starts the development server.
- `build`: Builds the application for production.
- `eject`: Ejects the create-react-app configuration.
- `lint`: Runs ESLint.
- `lint:fix`: Fixes ESLint issues.
- `prettier`: Runs Prettier.
- `format:check`: Checks code formatting.
- `format:fix`: Fixes code formatting.
- `types:check`: Checks TypeScript types.

### Backend

- `start`: Starts the server.
- `dev`: Starts the server with nodemon for development.

## License

This project is licensed under the terms specified in the `LICENSE` file. Only Joel Yernault is granted permission to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this software. All other individuals or entities must obtain prior written consent from the copyright holder.
# User Authentication API

A simple **Node.js authentication API** using **JWT and bcrypt.js** for secure user authentication.

## Features
✅ User Registration (Password Hashing with bcrypt.js)  
✅ User Login (JWT Token Generation)  
✅ Protected Route (Requires Token)  

## Technologies Used
- Node.js  
- Express.js  
- JWT (jsonwebtoken)  
- bcrypt.js  
- Body-parser  

## Installation & Setup
1. **Clone the Repository**  
   ```bash
   git clone https://github.com/yourusername/auth-api.git
   cd auth-api
   ```  
2. **Install Dependencies**  
   ```bash
   npm install express jsonwebtoken bcryptjs body-parser
   ```  
3. **Run the Server**  
   ```bash
   node app.js
   ```  

## API Endpoints
### 1. Register User
- **URL:** `POST /register`  
- **Body (JSON):**  
   ```json
   {
     "username": "user1",
     "password": "password123"
   }
   ```  
- **Response:**  
   ```json
   { "message": "User registered successfully" }
   ```  

### 2. Login User
- **URL:** `POST /login`  
- **Body (JSON):**  
   ```json
   {
     "username": "user1",
     "password": "password123"
   }
   ```  
- **Response (JWT Token):**  
   ```json
   {
     "token": "your_jwt_token_here"
   }
   ```  

### 3. Access Protected Route
- **URL:** `GET /protected`  
- **Headers:**  
   ```json
   {
     "Authorization": "Bearer your_jwt_token_here"
   }
   ```  
- **Response:**  
   ```json
   { "message": "Protected content accessed" }
   ```  

## License
This project is licensed under the MIT License.

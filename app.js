const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;
const SECRET_KEY = "your_secret_key";

// Dummy user database (In-memory)
const users = [];

app.use(bodyParser.json());

// User Registration
app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.json({ message: "User registered successfully" });
});

// User Login
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
});

// Protected Route
app.get("/protected", (req, res) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(403).json({ message: "No token provided" });

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).json({ message: "Invalid token" });
        res.json({ message: "Access granted", user: decoded });
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

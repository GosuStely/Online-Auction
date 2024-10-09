import express from "express";
import users from "../data/users.js";
import bcrypt from "bcrypt";
import authenticateToken from "../middleware/AuthenticateToken.js";
import jwt from "jsonwebtoken";
import secret from "../data/secret.js";

const router = express.Router();

router.post("/", async(req, res) => {
    const { username, password, email } = req.body;
    const userExists = users.find((user) => user.username === username || user.email === email);
    if (userExists) {
        return res.status(401).send({message:"User already exists"});
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser ={
        id: users.length + 1,
        username: username,
        password: hashedPassword,
        email: email,
        isAdmin: false
    };
    console.log(newUser);

    users.push(newUser);
    const token = jwt.sign({ id: newUser.id, isAdmin: newUser.isAdmin }, secret, { expiresIn: '1h' });

    res.status(201).json({message:"User registered successfully", token});
});

router.get("/", authenticateToken, (req, res) => {
    const user = users.find((user) => user.id === req.user.id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json({ id: user.id, username: user.username, email: user.email, isAdmin: user.isAdmin });
});


export default router;
const express = require('express');
const Customer = require('../models/Customer');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const protect = require('../middlewares/authMiddleware');

const router = express.Router();

router.post("/register", async (req,res) => {
    try{
        const { firstname, lastname, email, password } = req.body;

        const emailExists = await Customer.findOne({ email });

        if(emailExists){
            return res.status(400).json({ message: "Enter another email" });
        }

        const newCustomer = new Customer({ firstname, lastname, email, password });
        await newCustomer.save();

        res.status(201).json({ message: "Customer regstered successfully "});
    }catch(error){
        res.status(500).json({ message: "register form error" });
    }
});

router.post("/login", async (req,res) => {
    try{
        const { email, password } = req.body;
        const customer = await Customer.findOne({ email });
        
        if(!customer){
            return res.status(400).json({ message: "Customer not found" });
        }

        const isMatch = await customer.matchPassword(password);

        if(!isMatch){
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // generate JWT token
        const token = jwt.sign({ userId: customer._id },process.env.JWT_SECRET,{ expiresIn: "7d" });

        res.status(200).json({ message: "Login successful", token, customer });
    }catch(error){
        console.error("Login error:", error);
        res.status(500).json({ message: "login form error" });
    }
});

module.exports = router;
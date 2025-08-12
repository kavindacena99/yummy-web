const express = require('express');
const Seller = require('../models/Seller');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const protect = require('../middlewares/authMiddleware');

const router = express.Router();

router.post("/register", async (req,res) => {
    try{
        const { fullname, businessname, email, password } = req.body;

        const emailExists = await Seller.findOne({ email });
        const businessnameExists = await Seller.findOne({ businessname });

        if(emailExists){
            return res.status(400).json({ message: "Enter another email" });
        }

        if(businessnameExists){
            return res.status(400).json({ message: "Business already exists "});
        }

        const newSeller = new Seller({ fullname, businessname, email, password });
        await newSeller.save();

        res.status(201).json({ message: "Seller regstered successfully "});
    }catch(error){
        res.status(500).json({ message: "register form error" });
    }
});

router.post("/login", async (req,res) => {
    try{
        const { email, password } = req.body;
        const seller = await Seller.findOne({ email });
        
        if(!seller){
            return res.status(400).json({ message: "Seller not found" });
        }

        const isMatch = await seller.matchPassword(password);

        if(!isMatch){
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // generate JWT token
        const token = jwt.sign({ userId: seller._id },process.env.JWT_SECRET,{ expiresIn: "7d" });

        res.status(200).json({ message: "Login successful", token, seller });
    }catch(error){
        console.error("Login error:", error);
        res.status(500).json({ message: "login form error" });
    }
});


/*

// Get current user profile
router.get("/profile", protect, async (req, res) => {
    try {
        const user = await User.findById(req.user).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Update current user profile
router.put("/profile", protect, async (req, res) => {
    try {
        const user = await User.findById(req.user);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const { firstname, lastname, businessname, email, password } = req.body;

        if (firstname) user.firstname = firstname;
        if (lastname) user.lastname = lastname;
        if (businessname) user.businessname = businessname;
        if (email) user.email = email;
        if (password) user.password = password;

        await user.save();

        res.json({ message: "Profile updated successfully", user: user.toObject({ getters: true, virtuals: false }) });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});
*/

module.exports = router;
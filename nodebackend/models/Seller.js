const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const sellerSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    businessname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true } 
}, { timestamps: true }
);

// hash password before saving
sellerSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// compare password
sellerSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

const Seller = mongoose.model("Seller", sellerSchema);

module.exports = Seller;
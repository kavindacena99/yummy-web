const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const sellerRoutes = require('./controllers/sellerRoutes');
const customerRoutes = require('./controllers/customerRoutes');

dotenv.config();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

// connect to mongoDB
mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("Mongo DB connected"))
.catch((err) => console.log("Mongo is not connected " + err));

//routes
app.use("/api/seller", sellerRoutes);
app.use("/api/customer", customerRoutes);

// server starts
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
    console.log(`Server is runnng at ${PORT}`);
});
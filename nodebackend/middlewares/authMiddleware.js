import jwt from 'jsonwebtoken';
import Customer from '../models/Customer.js';
import Seller from '../models/Seller.js';
import Admin from '../models/Admin.js';

const protect = async () => {
    let token;

    if (req.headers.authorization?.startsWith('Bearer')) {
        try {
        token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        let user =
            (await Customer.findById(decoded.id).select('-password')) ||
            (await Seller.findById(decoded.id).select('-password')) ||
            (await Admin.findById(decoded.id).select('-password'));

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        req.user = user; // attach to request
        req.userType = user.constructor.modelName.toLowerCase(); // 'customer', 'seller', 'admin'

        next();
        } catch (error) {
        return res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }
}

module.exports = protect;
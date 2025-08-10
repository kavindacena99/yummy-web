const authorizeUserType = (...types) => {
    return (req, res, next) => {
    if (!types.includes(req.userType)) {
      return res.status(403).json({ message: `Access denied for ${req.userType}` });
    }
    next();
  };
}

module.exports = authorizeUserType;
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decode = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decode;
        next();
    } catch (error) {
        console.log("Auth Error => ", error);
        return res.status(401).json({
            status: 401,
            message: 'Authentication failed.'
        })
    }
    
}
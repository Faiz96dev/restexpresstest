const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    let token = req.headers['authorization'];
    if (!token) {
        return res.status(403).send({ message: 'No token provided!' });
    }

    try {
        token = token.split(' ')[1]; 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(401).send({ message: 'Unauthorized!' });
    }
};

module.exports = verifyToken;

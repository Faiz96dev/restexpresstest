const jwt = require('jsonwebtoken');

const createToken = (id) => {
    return jwt.sign({ id }, 'secret', { expiresIn: '10m' });
};

const createRefreshToken = (id) => {
    return jwt.sign({ id }, 'refresh_secret', { expiresIn: '7d' });
};

const verifyToken = (token) => {
    return jwt.verify(token, 'secret');
};

const verifyRefreshToken = (refreshToken) => {
    return jwt.verify(refreshToken, 'refresh_secret');
};

module.exports = {
    createToken,
    createRefreshToken,
    verifyToken,
    verifyRefreshToken
};

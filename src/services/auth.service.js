const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userModel = require('../models/user.model');

const signIn = async (email, password) => {
    const user = await userModel.findOne({ email });
    if (!user) throw new Error('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '10m' });
    const refreshToken = jwt.sign({ id: user.id }, 'refresh_secret', { expiresIn: '7d' });

    return { token, refreshToken };
};

const refreshToken = async (token) => {
    try {
        const { id } = jwt.verify(token, 'refresh_secret');
        const newToken = jwt.sign({ id }, 'secret', { expiresIn: '10m' });
        return { newToken };
    } catch (error) {
        throw new Error('Invalid token');
    }
};

const signUp = async (email, password) => {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await userModel.create({ email, password: hashedPassword });
    const token = jwt.sign({ id: newUser.id }, 'secret', { expiresIn: '10m' });
    const refreshToken = jwt.sign({ id: newUser.id }, 'refresh_secret', { expiresIn: '7d' });

    return { token, refreshToken };
};

const logout = async (token) => {
    // Invalidate the token logic here
};

module.exports = { signIn, refreshToken, signUp, logout };

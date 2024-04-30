const authService = require('../../services/auth.service');

exports.signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const tokens = await authService.signIn(email, password);
        res.json(tokens);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.refreshToken = async (req, res) => {
    try {
        const { refreshToken } = req.body;
        const newToken = await authService.refreshToken(refreshToken);
        res.json(newToken);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.signUp = async (req, res) => {
    try {
        const { email, password } = req.body;
        const tokens = await authService.signUp(email, password);
        res.status(201).json(tokens);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.logout = async (req, res) => {
    try {
        const { refreshToken } = req.body;
        await authService.logout(refreshToken);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

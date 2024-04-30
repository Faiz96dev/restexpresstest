
const userService = require('../../services/user.service');

exports.getUserInfo = async (req, res) => {
    try {
        const userId = req.userId; 
        const user = await userService.getUserById(userId);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.json({ id: user.id, email: user.email });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

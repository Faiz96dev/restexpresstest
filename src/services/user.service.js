const User = require('../models/user.model');

const getUserById = async (id) => {
    return await User.findByPk(id);
};

module.exports = { getUserById };

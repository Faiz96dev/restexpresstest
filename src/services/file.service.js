const fileModel = require('../models/file.model');

const saveFile = async (fileData) => {
    return await fileModel.create(fileData);
};

const listFiles = async (page = 1, list_size = 10) => {
    return await fileModel.find({})
        .skip((page - 1) * list_size)
        .limit(list_size);
};

const getFileById = async (id) => {
    return await fileModel.findById(id);
};

const updateFile = async (id, fileData) => {
    return await fileModel.findByIdAndUpdate(id, fileData, { new: true });
};

const deleteFile = async (id) => {
    const file = await fileModel.findById(id);
    // Add file system removal logic here, e.g., fs.unlinkSync(file.path)
    return await fileModel.findByIdAndRemove(id);
};

module.exports = { saveFile, listFiles, getFileById, updateFile, deleteFile };

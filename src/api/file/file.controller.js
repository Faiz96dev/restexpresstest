const fileService = require('../../services/file.service');

exports.uploadFile = async (req, res) => {
    try {
        const fileData = {
            name: req.file.originalname,
            type: req.file.mimetype,
            size: req.file.size,
            path: req.file.path,
        };
        await fileService.saveFile(fileData);
        res.status(201).send('File uploaded successfully');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listFiles = async (req, res) => {
    try {
        const { page, list_size } = req.query;
        const files = await fileService.listFiles(page, list_size);
        res.json(files);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getFile = async (req, res) => {
    try {
        const file = await fileService.getFileById(req.params.id);
        res.json(file);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.downloadFile = async (req, res) => {
    try {
        const file = await fileService.getFileById(req.params.id);
        res.download(file.path);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateFile = async (req, res) => {
    try {
        const fileData = {
            name: req.file.originalname,
            type: req.file.mimetype,
            size: req.file.size,
            path: req.file.path,
        };
        await fileService.updateFile(req.params.id, fileData);
        res.send('File updated successfully');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteFile = async (req, res) => {
    try {
        await fileService.deleteFile(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

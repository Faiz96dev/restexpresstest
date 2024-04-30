const express = require('express');
const router = express.Router();
const fileController = require('./file.controller');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), fileController.uploadFile);
router.get('/list', fileController.listFiles);
router.get('/:id', fileController.getFile);
router.get('/download/:id', fileController.downloadFile);
router.put('/update/:id', upload.single('file'), fileController.updateFile);
router.delete('/delete/:id', fileController.deleteFile);

module.exports = router;

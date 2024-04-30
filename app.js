const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileRoutes = require('./src/api/file/file.routes');
const authRoutes = require('./src/api/auth/auth.routes');
const userRoutes = require('./src/api/user/user.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;

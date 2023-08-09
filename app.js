const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/sequelize');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/users', userRoutes);

sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(error => {
        console.error("Database sync error:", error);
    });

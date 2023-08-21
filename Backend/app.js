const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const sequelize = require("./util/database");

const app = express();

app.use(cors());

const userRoutes = require("./routes/users");

app.use(bodyParser.json({ extended: false }));

app.use('/users', userRoutes);

sequelize.sync()
    .then(result => {
        // console.log(result)
        app.listen(5000);
    })
    .catch(err => {
        console.log(err)
    })

// app.listen(5000);
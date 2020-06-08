const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});


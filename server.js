require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// Database connect
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established.');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});


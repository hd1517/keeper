require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// Database connect
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established.');
});

// Routes
const notesRouter = require('./routes/notes');
app.use('/notes', notesRouter);

// Listen
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});


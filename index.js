require('dotenv').config(); //handles all process.env from .env file
const express = require('express');
const countryRouter = require('./routes/countries');
const userRouter = require('./routes/user');
const fs = require('fs');
const marked = require('marked');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Base url to get documentation ========================================= //
app.get('/', (req, res) => {
    var path = __dirname + '/README.md';
    var file = fs.readFileSync(path, 'utf8');
    res.send(marked(file.toString()));
    // res.end("Hello World. This is the API documentation page.");
});

// Country route ========================================================= //
app.use('/countries', countryRouter);

// User route ========================================================= //
app.use('/users', userRouter);

// Startup the listener ================================================= //
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server started. Goto http://localhost:${PORT}`);
});
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDb = require('./database');

require('dotenv').config();

const app = express();

connectDb();


app.use(morgan('dev'));
app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
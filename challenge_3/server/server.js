const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, '../public')));

module.exports = app;
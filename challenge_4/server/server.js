const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, '../public')))


module.exports = app;

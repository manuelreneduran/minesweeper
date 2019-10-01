var express = require('express');
var app = require('./server.js');
var port = 3000;

app.listen(port, () => {
  console.log(`server running on port:${port}`)
})
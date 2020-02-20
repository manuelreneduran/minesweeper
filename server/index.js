const express = require('express');
const app = require('./server.js');
const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`server running on ${port}`);
})
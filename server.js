'use strict';

const express = require('express');
const hostname = require('os').hostname();

const PORT = 5000;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send(`<h1>Hello from Node ${hostname}</h1>`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
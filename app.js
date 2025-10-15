const express = require('express');
const app = express();

app.get('/', (req, res, next) =>{
    res.send('Personal Budget Project...')
})

// export app for use in main.js and for testing
module.exports = {
  app
};

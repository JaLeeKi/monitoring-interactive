const express = require('express');
const path = require('path');
const app = express();
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: 'b3f714a7d7094087bd80563992f7b964',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.use(express.json())


app.get('/', function(req, res) {
    rollbar.log('Hello world!')
    res.sendFile(path.join(__dirname, '/public/index.html'))
})



const port = process.env.PORT || 4545;

app.listen(port, function() { console.log(`Server breathing on ${port}`)})
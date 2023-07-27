const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('./middleware/cross-domain');
const errorHandler = require('./middleware/errorhandler');

require('dotenv').config()
const port = process.env.PORT || 3001


// logging middleware
let num = 0;
app.use(function (req, res, next) {
  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress;
  const method = req.method;
  const url = req.url;

  console.log((++num) + ". IP " + ip + " " + method + " " + url);
  next();
});

// CORS DOMAIN SETTING
app.use(cors.allowCrossDomain)

// Use Node.js body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// ROUTING
app.get('/', async (req, res) => {
  res.send("Hello world!!!")
})
let routes = require('./routes/api')
routes(app)

// Error handling: function defined above (which logs the error)
app.use(errorHandler.errorLogger)
// Error handling: function defined above (which sends back the response)
app.use(errorHandler.errorResponder)
// Error handling: function which sends back the response for invalid paths)
app.use(errorHandler.invalidPathHandler)



// LOAD
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

var server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});

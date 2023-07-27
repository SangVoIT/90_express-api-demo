'use strict'
// Error handling Middleware function for logging the error message
function errorLogger(error, request, response, next){
  // Error handling middleware functionality
  console.log( `error ${error.message}`) // log the error
  console.log(error)
  const status = error.status || 400
  // send back an easily understandable error message to the caller
  response.status(status).send(error.message)
}

// Error handling Middleware function reads the error message 
// and sends back a response in JSON format
function errorResponder(error, request, response, next){
  response.header("Content-Type", 'application/json')
    
  const status = error.status || 400
  response.status(status).send(error.message)
}

// Fallback Middleware function for returning 
// 404 error for undefined paths
function invalidPathHandler(request, response, next) {
  response.status(404)
  response.send('invalid path')
}


module.exports = { errorLogger, errorResponder, invalidPathHandler }
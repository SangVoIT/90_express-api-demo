'use strict'
// CROSS DOMAIN
function allowCrossDomain(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, access_token'
    )
  
    // intercept OPTIONS method
    if ('OPTIONS' === req.method) {
      res.sendStatus(200)
    } else {
      next()
    }
  }
module.exports = { allowCrossDomain }
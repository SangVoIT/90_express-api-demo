'use strict';
var express = require("express");

module.exports = function(app) {
  let productController = require('../controllers/product.controller');

  // todoList Routes
  app.route('/products')
    .get(productController.getAll)
    .post(productController.storeProduct)
    .delete(productController.deleteProduct);

  app.route('/products/:productId')
    .get(productController.getProduct)
    .post(productController.updateProduct);
    
};

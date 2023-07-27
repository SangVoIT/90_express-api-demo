'use strict'
const productModel = require('../models/product.model')
const productUtil = require('../utils/product.util')
class ProductController {
    static async getAll(req, res, next) {
        try {
            let result = await productModel.getAllProduct();
            if (result) {
                let lstProduct = []
                result.forEach(element => {
                    lstProduct.push(productUtil.convertToProduct(element))
                });
                res.send({content: lstProduct})
            }
        } catch (error) {
            next(error)
        }
    }
    static async getProduct(req, res, next) {
        try {
            let productID = req.params.productId;
            let result = await productModel.getProduct(productID);
            if (!result.message) {
                res.status(result.code).send({content: result.content})
            } else {
                res.status(result.code).send({message: result.message})
            }
        } catch (error) {
            next(error);
        }
    }
    static async storeProduct(req, res, next) {
        try {
            var name = req.body.name;
            var type = req.body.type;
            var description = req.body.description;
            var price = req.body.price;
            let result = await productModel.storeProduct(name, type, description, price);
            if (result = true) {
                res.send("Add successfully!!!");
            } 
        } catch (error) {
            next(error);
        }
    }
    static async updateProduct(req, res, next) {
        try {
            let productID = req.params.productId;
            let name = req.body.name;
            let type = req.body.type;
            let description = req.body.description;
            let price = req.body.price;
            let result = await productModel.updateProduct(productID, name, type, description, price);
            if (result = true) {
                res.send("Update successfully!!!");
            } 
        } catch (error) {
            next(error);
        }
    }

    static async deleteProduct(req, res) {
        let productID = req.body.productId;
        let result = await productModel.deleteProduct(productID);
        if (result = true) {
            res.send("Delete successfully!!!");
        } else {
            res.send("Delete failed!!!");
        }
    }
}

module.exports=ProductController
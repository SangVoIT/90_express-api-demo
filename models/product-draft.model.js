const db = require('../config/db')
class ProductModel {
    static async getAllProduct(){
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM product';
            db.query(sql, [], (error, result) => {
                if(!error) {
                    resolve(result)
                } else {
                    reject({"message":`${error}`});
                }
            })
        })
    }
    static async getProduct(productID){
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM product WHERE id = ?';
            db.query(sql, [productID], (error, result) => {
                // console.log(result)
                if(!error) {
                    if (result.length > 0) {
                        resolve({code: 200, content: result[0]})
                    } else {
                        resolve({code: 422, message: "Product is not existing, please try again!"})
                    }
                } else {
                    // console.log(error)
                    reject({"message":`${error}`});
                }
            })
        })
    }
    static async storeProduct(name, type, description, price){
        return new Promise((resolve, reject) => {
            let modifyBy = "admin";
            let ts = Date.now();
            let createDate = new Date(ts);
            let updateDate = new Date(ts);
            let sql = 'INSERT INTO product(name, type, description, price, modify_by, create_date, update_date) VALUES (?, ?, ?, ?, ?, ?, ?)';
            db.query(sql, [name, type, description, price, modifyBy, createDate, updateDate], (error, result) => {
                if(!error) {
                    resolve(true)
                } else {
                    reject({"message":`${error}`});
                }
            })
        })
    }
    static async updateProduct(productID, name, type, description, price){
        return new Promise((resolve, reject) => {
            let modifyBy = "admin";
            let ts = Date.now();
            let updateDate = new Date(ts);
            let sql = 'UPDATE product SET name=?, type=?, description=?, price=?, modify_by=?, update_date=? WHERE id=?';
            db.query(sql, [name, type, description, price, modifyBy, updateDate, productID], (error, result) => {
                if(!error) {
                    resolve(true)
                } else {
                    reject({"message":`${error}`});
                }
            })
        })
    }
    static async deleteProduct(productID){
        return new Promise(resolve => {
            let sql = 'DELETE FROM product WHERE id = ?';
            db.query(sql, [productID], (error, result) => {
                if(!error) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            })
        })
    }
}
module.exports = ProductModel
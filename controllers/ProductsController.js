'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')


const users = [{
    id: 1,
    name: "Richard Hendricks",
    email: "richard@piedpiper.com",
},
{
    id: 2,
    name: "Bertram Gilfoyle",
    email: "gilfoyle@piedpiper.com",
},
];

module.exports = {
    get: (req, res) => {
        const sql = 'SELECT * FROM products'
        res.send(users);
    },
    detail: (req, res) => {
        const  sql = 'SELECT * FROM products WHERE id = ?'
        res.json("Detail ProductsController")
    },
    update: (req, res) => {
        const  data = req.body;
        const  productId = req.params.productId;
        const  sql = 'UPDATE products SET ? WHERE id = ?'
        res.json("Update ProductsController")
    },
    store: (req, res) => {
        const  data = req.body;
        const  sql = 'INSERT INTO products SET ?'
        res.json("Store ProductsController")
    },
    delete: (req, res) => {
        const  sql = 'DELETE FROM products WHERE id = ?'
        res.json("Delete ProductsController")
    }
}
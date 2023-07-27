'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST || "demo-db-instance.ctffop9yapfx.us-east-1.rds.amazonaws.com",
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || "admin",
  password: process.env.DB_PASS || "Vti1234.",
  database: process.env.DB_NAME || "demo_db"
});

db.connect((err) => {
  if (!err) {
    console.log("Database connected successfully!");
  } else {
    console.log("Database connection failed!");
  }
});

module.exports = db
const express = require("express");
const Router = express.Router();
const mysql = require("../configs/database");
const request = require('request');

Router.post('/', function(req, res){
    var post_data = req.body;
    console.log(post_data);
    mysql.query('INSERT INTO `nhantin`(`id`, `lastName`, `firstName`) VALUES (?)',[post_data.userId,post_data.lastName,post_data.firstName],(err, rows) => {
        if(err){
        }
    })
    res.status(200).end();
})

module.exports =Router;
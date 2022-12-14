const express = require('express');
const product = require ('./product');
const category = require ('./category');
const order = require ('./order');
const user = require('./user')
const jwt = require('jsonwebtoken')
const response = require('../Helpers/response')
const secretKey = process.env.SECRET_KEY || 270400;

const Router = express.Router();

const validateUser = (req, res, next) => {
    jwt.verify(req.headers['x-access-token'], secretKey, (err, decoded) => {
      if (err) {
        response.error(res, err.message);
      }else{
        req.body.user_id = decoded.id;
        next();
      }
    });
  }

Router.get('/', (req, res) => {
    res.json({
        message: "Welcome to RESTfull API",
    });
})

Router.use('/product',validateUser, product);
Router.use('/category',validateUser, category);
Router.use('/order',validateUser, order);
Router.use('/user', user)

module.exports = Router;

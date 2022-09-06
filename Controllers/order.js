const orderModel = require('../Models/order')
const response = require('../Helpers/response')

const reduceProduct = (req, res) => {
    orderModel
    .getOrderGroup (req)
    .then(response => {
        console.log(typeof this);
        if (response.length == 0){
        orderModel
            .reduceProduct (req)
            .then (response => {
            response.success (res, 200, "Product success reduced");
            })
            .catch (error => {
            response.error (res, 400, error);
            });
        } else {
        req.body.order_group++;
        reduceProduct(req, res);
        }
    });
    }

    module.exports = {
    addProduct: (req, res) => {
        orderModel
        .addProduct (req)
        .then (response => {
            response.success (res, 200, "Product success added");
        })
        .catch (error => {
            response.error (res, 400, error);
        });
    },

    reduceProduct

};

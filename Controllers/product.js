const productModel = require('../Models/product')
const response = require('../Helpers/response')
const { fPagination } = require('../Helpers/function')

module.exports = {
  getProduct: (req, res) => {
  const page = fPagination(req);
  productModel
    .getProduct (req, page)
    .then (response => {
      response.success (res, 200, response);
    })
    .catch (error => {
      response.error(res, 400, error);
    });
  },
  getProductId: (req, res) => {
  productModel
    .getProductId(req)
    .then (response => {
      if(response.length > 0 ) {
        response.success (res, 200, response);
      } else {
        response.error (res, 400, "ID Product Not Found")
      }
    })
    .catch (error => {
      response.error(res, 400, error);
    });
  },
  postProduct: (req, res) => {
    productModel
      .postProduct (req)
      .then (response => {
        response.success (res, 200, "Product success insert");
      })
      .catch (error => {
        response.error(res, 400, error);
      });
  },
  putProduct: (req, res) => {
    productModel
      .putProduct (req)
      .then (response => {
        response.success (res, 200, "Product success update");
      })
      .catch (error => {
        response.error(res, 400, error);
      });
  },
  deleteProduct: (req, res) => {
    productModel
      .getProductId (req)
      .then(response => {
        if (response.length > 0) {
          productModel
          .deleteProduct (req)
          .then(response => {
            response.success (res, 200, "Product success delete");
          })
          .catch(error => {
            response.error (res, 400, error);
          })
        } else {
          response.error (res, 400, "ID Product Not Found")
        }
      })
      .catch (error => {
        response.error(res, 400, error);
      });
  },
};

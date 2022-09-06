const categoryModel = require('../Models/category')
const response = require('../Helpers/response')
const { fPagination } = require('../Helpers/function')

module.exports = {
    getCategory: (req, res) => {
    const page = fPagination(req);
    categoryModel
        .getCategory (req, page)
        .then (response => {
        response.success(res, 200, response);
        })
        .catch (error => {
        response.error(res, 400, error);
        });
    },
    getCategoryId: (req, res) => {
    categoryModel
        .getCategoryId(req)
        .then (response => {
        if(response.length > 0 ) {
            response.success(res, 200, response);
        } else {
            response.error(res, 400, "ID Category Not Found")
        }
        })
        .catch (error => {
        response.error(res, 400, error);
        });
    },
    postCategory: (req, res) => {
        categoryModel
        .postCategory (req)
        .then (response => {
            response.success(res, 200, "Category success added");
        })
        .catch (error => {
            response.error(res, 400, error);
        });
    },
    putCategory: (req, res) => {
        categoryModel
        .putCategory (req)
        .then (response => {
            response.success(res, 200, "Category success updated");
        })
        .catch (error => {
            response.error(res, 400, error);
        });
    },
    deleteCategory: (req, res) => {
        categoryModel
        .getCategoryId (req)
        .then(response => {
            if (response.length > 0) {
            categoryModel
            .deleteCategory (req)
            .then(response => {
                response.success (res, 200, "Category succes delete");
            })
            .catch(error => {
                response.error (res, 400, error);
            })
            } else {
            response.error(res, 400, "ID Product Not Found")
            }
        })
        .catch (error => {
            response.error(res, 400, error);
        });
    },
};

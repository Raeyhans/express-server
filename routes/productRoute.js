const productRoute = require('express').Router();
const ProductController = require('../controllers/ProductController');

productRoute.get('/', ProductController.getAllProduct);
productRoute.get('/:id', ProductController.getProduct);
productRoute.post('/', ProductController.productStore);
productRoute.put('/:id', ProductController.productUpdate);
productRoute.delete('/:id', ProductController.productDelete);

module.exports = productRoute;
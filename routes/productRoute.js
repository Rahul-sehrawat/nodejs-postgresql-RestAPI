const router = require('express').Router() 
const productController = require('../controllers/productControllers')

router.get('/products',productController.getAllProducts)

router.post('/producs',productController.createProduct)

router.put('/products/:id',productController.updateProduct)

module.exports = router

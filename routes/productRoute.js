const router = require('express').Router() 
const productController = require('../controllers/productControllers')

router.get('/products',productController.getAllProducts)
router.get('/products/:id',productController.getProductById)
router.get('/products/category/:categoryId',productController.getProductsByCategoryId)
router.post('/products',productController.createProduct)
router.put('/products/:id',productController.updateProduct)
router.delete('/products/:id',productController.deleteProduct)

module.exports = router

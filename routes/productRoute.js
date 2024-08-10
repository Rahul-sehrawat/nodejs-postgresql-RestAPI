const router = require('express').Router() 
const productCOntroller = require('../controllers/productControllers')

router.get('/products',productCOntroller.getAllProducts)

router.post('/product',productCOntroller.createProduct)

module.exports = router

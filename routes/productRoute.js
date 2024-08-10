const router = require('express').Router() 
const productCOntroller = require('../controllers/productControllers')

router.get('/products',productCOntroller.getAllProduct)

module.exports = router
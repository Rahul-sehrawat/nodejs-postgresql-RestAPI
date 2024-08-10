const router = require('express').Router()
const categoryController = require('../controllers/categoryControllers')

router.get('/categories',categoryController.getAllCategories)

module.exports = router
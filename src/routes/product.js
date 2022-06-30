const express = require('express')
const router = express.Router()
const productController = require('../controllers/product')
const uploadMiddleware = require('../middleware/uploads')

router.get('/products', productController.findAll)
router.post('/products', uploadMiddleware.uploadMultiImg, productController.create)
router.get('/products/:id', productController.findById)
router.put('/products/:id', uploadMiddleware.uploadMultiImg, productController.update)
router.delete('/products/:id', productController._delete)

module.exports = router

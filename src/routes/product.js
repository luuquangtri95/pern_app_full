const express = require('express')
const router = express.Router()
const productController = require('../controllers/product')
const uploadMiddleware = require('../middleware/uploads')
const productValidator = require('../validator/product')

router.get('/products', productController.findAll)
router.post(
  '/products',
  uploadMiddleware.uploadMultiImg,
  productValidator.create,
  productController.create,
)
router.get('/products/:id', productController.findById)
router.put(
  '/products/:id',
  uploadMiddleware.uploadMultiImg,
  productValidator.update,
  productController.update,
)
router.delete('/products/:id', productController._delete)

router.get('/brands', productController.getAllBrand)

module.exports = router

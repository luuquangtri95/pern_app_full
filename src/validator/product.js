const { productSchema } = require('../helpers/validation_schema')
const ResponseHandler = require('../helpers/responseHandler')

const create = (req, res, next) => {
  const dataValidate = {
    ...req.body,
    imageList: req.files,
  }

  // validator
  const result = productSchema.validate(dataValidate)

  const { value, error } = result

  if (error) {
    const errorMessage = error.details.map((err) => err.message)

    return ResponseHandler.error(res, {
      message: errorMessage,
    })
  }

  next()
}

const update = (req, res, next) => {
  const dataValidate = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    brandId: req.body.brandId,
    imageList: req.files,
  }

  // validator
  const result = productSchema.validate(dataValidate)

  const { value, error } = result

  if (error) {
    const errorMessage = error.details.map((err) => err.message)

    return ResponseHandler.error(res, {
      message: errorMessage,
    })
  }

  next()
}

module.exports = {
  create,
  update,
}

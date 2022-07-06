const changeUrl = require('../helpers/changeUrlImage')
const ResponseHandler = require('../helpers/responseHandler')
const productService = require('../services/product')

const findAll = async (req, res) => {
  try {
    const result = await productService.findAll()

    return ResponseHandler.success(res, result)
  } catch (error) {
    return ResponseHandler.error(res, error)
  }
}

const findById = async (req, res) => {
  try {
    const id = req.params.id

    const result = await productService.findById(id)

    return ResponseHandler.success(res, result)
  } catch (error) {
    return ResponseHandler.error(res, error)
  }
}

const create = async (req, res) => {
  try {
    const data = {
      ...req.body,
      image: changeUrl(req.files),
    }

    console.log('2. controller', data)

    const result = await productService.create(data)
    return ResponseHandler.success(res, result)
  } catch (error) {
    return ResponseHandler.error(res, error)
  }
}

const update = async (req, res) => {
  try {
    // const response = {
    //   id: req.params.id,
    //   data: {
    //     ...req.body,
    //     imageList: [...changeUrl(req.files)],
    //   },
    // }
    const result = await productService.update(req)
    return ResponseHandler.success(res, result)
  } catch (error) {
    return ResponseHandler.error(res, error)
  }
}

const _delete = async (req, res) => {
  try {
    const id = req.params.id

    const result = await productService._delete(id)
    return ResponseHandler.success(res, result)
  } catch (error) {
    return ResponseHandler.error(res, error)
  }
}

const getAllBrand = async (req, res) => {
  try {
    const result = await productService.getAllBrand()
    return ResponseHandler.success(res, result)
  } catch (error) {
    return ResponseHandler.error(res, error)
  }
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  _delete,
  getAllBrand,
}

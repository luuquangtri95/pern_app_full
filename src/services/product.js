const db = require('../models')
const { productSchema } = require('../helpers/validation_schema')

const findAll = async () => {
  try {
    return await db.Product.findAll({
      attributes: ['id', 'title', 'imageList', 'price', 'description'],
      include: { model: db.Brand, as: 'brand', attributes: ['id', 'name'] },
      order: [['id', 'DESC']],
    })
  } catch (error) {
    throw error
  }
}

const findById = async (id) => {
  try {
    return await db.Product.findOne({
      where: { id },
      attributes: ['id', 'title', 'imageList', 'description'],
      include: { model: db.Brand, as: 'brand', attributes: ['id', 'name'] },
    })
  } catch (error) {
    throw error
  }
}

const create = async (data) => {
  try {
    const { title, description, price, brandId, image } = data

    return await db.Product.create({
      title,
      description,
      price,
      imageList: image,
      brandId,
    })
  } catch (error) {
    if (error.isJoi === true) {
      throw new Error()
    }
  }
}

const _delete = async (id) => {
  try {
    const product = await db.Product.findOne({
      where: { id },
    })

    if (product) {
      return await db.Product.destroy({
        where: {
          id,
        },
      })
    } else {
      throw new Error('delete product not success, product is not exist')
    }
  } catch (error) {
    throw error
  }
}

const update = async (req) => {
  try {
    const product = await db.Product.findOne({
      where: { id: req.body.id },
      raw: true,
    })

    if (product) {
      return await db.Product.update(
        {
          title: req.body.title,
          description: req.body.description,
          price: req.body.price,
          imageList: req.body.imageList,
          brandId: req.body.brandId,
        },
        {
          where: { id: req.body.id },
        },
      )
    } else {
      throw new Error('product is not exist')
    }
  } catch (error) {
    throw error
  }
}

const getAllBrand = async () => {
  try {
    return await db.Brand.findAll({
      attributes: ['id', 'name'],
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  findAll,
  findById,
  create,
  _delete,
  update,
  getAllBrand,
}

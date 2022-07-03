const db = require('../models')

const findAll = async () => {
  try {
    return await db.Product.findAll({
      attributes: ['id', 'title', 'imageList', 'price', 'description'],
      include: { model: db.Brand, attributes: ['id', 'name'] },
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
      include: { model: db.Brand, attributes: ['id', 'name'] },
    })
  } catch (error) {
    throw error
  }
}

const create = async (data) => {
  try {
    const { title, description, price, brandId, imageList } = data
    return await db.Product.create({
      title,
      description,
      price,
      imageList,
      brandId,
    })
  } catch (error) {
    throw error
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

const update = async (dataProduct) => {
  try {
    const product = await db.Product.findOne({
      where: { id: dataProduct.id },
    })

    if (product) {
      return await db.Product.update(
        {
          title: dataProduct.data.title,
          description: dataProduct.data.description,
          price: dataProduct.data.price,
          imageList: dataProduct.data.imageList,
          brandId: dataProduct.data.BrandId,
        },
        {
          where: { id: dataProduct.id },
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

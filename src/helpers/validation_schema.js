const Joi = require('joi')

const productSchema = Joi.object({
  title: Joi.string()
    .required()
    .custom((value, helper) => {
      const result = value.split(' ').filter((x) => !!x && x.length > 3).length
      console.log(result)
      if (result < 2) {
        return helper.message('Field title: Please at least 3 words')
      }
    }),
  description: Joi.string().required(),
  imageList: Joi.array().custom((value, helper) => {
    const result = value.length

    if (result < 1) {
      return helper.message('Please upload at least 1 image')
    }
  }),
  price: Joi.number().min(1000).max(100000000),
  brandId: Joi.string(),
})

module.exports = {
  productSchema,
}

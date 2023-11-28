const Joi = require('joi');
//数据验证规则：给到对象schema
const schema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required(),
  job: Joi.string()
    .min(3)
    .max(30)
    .required(),
});

module.exports = schema;

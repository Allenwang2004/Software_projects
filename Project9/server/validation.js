const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(6).max(50).required().email(),
    password: Joi.string().min(6).max(255).required(),
    role: Joi.string().required().valid("Front_end", "Back_end", "AI"),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(50).required().email(),
    password: Joi.string().min(6).max(255).required(),
  });

  return schema.validate(data);
};

const OrderValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(6).max(50).required(),
    description: Joi.string().min(6).max(50).required(),
    price: Joi.array().items(
      Joi.object({
        item: Joi.string().required(),
        cost: Joi.number().required(),
      })
    ),
    people: Joi.array().items(Joi.string()),
  });

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.OrderValidation = OrderValidation;

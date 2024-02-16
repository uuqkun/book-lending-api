import Joi from "joi";

const registerValidation = Joi.object({
    fullname: Joi.string().max(100).required(),
    email: Joi.string().max(100).email().required(),
    password: Joi.string().max(100).min(3).required(),
    phone: Joi.string().max(100).required(),
    role: Joi.string().max(100).optional()
});

export { 
    registerValidation
}
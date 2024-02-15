import Joi from "joi";

const createBookValidation = Joi.object({
    title: Joi.string().max(100).required(),
    author: Joi.string().max(100).required(),
    publisher: Joi.string().max(100).required(),
    stock: Joi.number().positive().min(1).required(),
    status: Joi.string().max(10).optional(),
});


export {
    createBookValidation
}


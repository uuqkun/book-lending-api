import Joi from "joi";

const createBookValidation = Joi.object({
    title: Joi.string().max(100).required(),
    author: Joi.string().max(100).required(),
    publisher: Joi.string().max(100).required(),
    stock: Joi.number().positive().min(1).required(),
    status: Joi.string().max(10).optional(),
});

const updateBookValidation = Joi.object({
    title: Joi.string().max(100).optional(),
    author: Joi.string().max(100).optional(),
    publisher: Joi.string().max(100).optional(),
    stock: Joi.number().positive().min(1).optional(),
    status: Joi.string().max(10).required(),
});

const getBookIdValidation = Joi.number().min(1).positive();


export {
    getBookIdValidation,
    updateBookValidation,
    createBookValidation
}


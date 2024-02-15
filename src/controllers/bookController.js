import { ResponseError } from "../errors/error.js";
import bookService from "../services/bookService.js"

const list = async (req, res, next) => {
    try {
        const result = await bookService.list();

        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const request = req.body;
        const result = await bookService.create(request);
        
        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

export default {
    create,
    list
}
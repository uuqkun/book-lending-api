import bookService from "../services/bookService.js"

const list = async(req, res, next) => {
    try {
        const result = await bookService.list();

        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

export default {
    list
}
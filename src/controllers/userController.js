import userService from "../services/userService.js";

const register = async (req, res, next) => {
    try {
        const request = req.body;
        const result = await userService.register(request);

        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error);
    }
}

export default {register}
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../errors/error.js";
import { registerValidation } from "../validations/userValidation.js";
import { validate } from "../validations/validation.js";
import bcrypt from "bcrypt";


const register = async (request) => {

    const user = validate(registerValidation, request);

    const countUserInDb = await prismaClient.user.count({
        where: {
            email: user.email
        }
    });

    if (countUserInDb === 1) {
        throw new ResponseError(409, "Email already taken");
    }

    user.password = await bcrypt.hash(user.password, 10);

    return prismaClient.user.create({
        data: { ...user, role: 'user' },
        select: {
            fullname: true,
            email: true,
            phone: true,
            role: true,
        }
    });
}

export default {
    register
}
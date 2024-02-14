import { prismaClient } from "../application/database.js"
import { ResponseError } from "../errors/error.js";


const list = async () => {
    return prismaClient.book.findMany({
        select: {
            id: true,
            title: true,
            author: true,
            publisher: true,
            stock: true,
            status: true
        }
    });
};

export default {
    list
}
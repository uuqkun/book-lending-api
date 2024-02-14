import { prismaClient } from "../application/database.js"
import { ResponseError } from "../errors/error.js";


const list = async () => {
    const books = await prismaClient.book.findMany({
        select: {
            id: true,
            title: true,
            author: true,
            publisher: true,
            stock: true,
            status: true
        }
    });

    if (!books) {
        throw new ResponseError(404, 'No books data available');
    }

    return books;
};

export default {
    list
}
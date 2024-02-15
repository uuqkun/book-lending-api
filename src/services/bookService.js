import { prismaClient } from "../application/database.js"
import { logger } from "../application/logging.js";
import { ResponseError } from "../errors/error.js";
import { createBookValidation, getBookIdValidation, updateBookValidation } from "../validations/bookValidation.js";
import { validate } from "../validations/validation.js";


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

    if (books.length === 0) {
        throw new ResponseError(404, "No data found");
    }

    return books;
};

const create = async (request) => {
    const book = validate(createBookValidation, request);

    return prismaClient.book.create({
        data: book,
        select: {
            id: true,
            title: true,
            author: true,
            publisher: true,
            stock: true,
            status: true
        }
    });
}

const update = async (request, bookId) => {
    request = validate(updateBookValidation, request);
    bookId = validate(getBookIdValidation, bookId);

    // Check if book was available in db
    const book = await prismaClient.book.findFirst({
        where: {
            AND: {
                id: bookId,
                status: 'available'
            }
        }
    });

    if (!book) {
        throw new ResponseError(404, 'No book found');
    }

    return prismaClient.book.update({
        where: {
            id: bookId,
        },
        data: request,
        select: {
            id: true,
            title: true,
            author: true,
            publisher: true,
            stock: true,
            status: true
        }
    });
}

export default {
    update,
    create,
    list
}
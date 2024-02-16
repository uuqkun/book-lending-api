import { prismaClient } from "../src/application/database.js"

export const createTestUser = async () => {
    return prismaClient.user.create({
        data: {
            fullname: 'user',
            email: 'user@gmail.com',
            password: 'secret',
            phone: '08882282',
            role: 'admin',
            token: 'admin'
        }
    });
}

export const deleteTestUser = async () => {
    return prismaClient.user.deleteMany();
}

export const createTestBook = async () => {
    const book = {
        title: "Test Book",
        author: "Test Author",
        publisher: "Test Publisher",
        stock: 10,
        status: "Available"
    }

    return prismaClient.book.create({
        data: book
    })
}

export const createManyTestBook = async () => {
    const books = [
        {
            title: "Test Book",
            author: "Test Author",
            publisher: "Test Publisher",
            stock: 10,
            status: "Available"
        },
        {
            title: "Test Book 2",
            author: "Test Author 2",
            publisher: "Test Publisher 2",
            stock: 20,
            status: "Available"
        },
    ];

    return prismaClient.book.createMany({
        data: books
    });
}

export const deleteManyTestBook = async () => {
    return prismaClient.book.deleteMany();
}

export const getBookId = async () => {
    return prismaClient.book.findFirst({
        where: {
            title: "Test Book"
        },
        select: {
            id: true,
            title: true,
            author: true,
            publisher: true,
            stock: true,
            status: true
        }
    })
}
import { prismaClient } from "../src/application/database.js"

export const createTestAdmin = async () => {
    return prismaClient.user.create({
        data: {
            fullname: 'admin 1',
            email: 'admin@gmail.com',
            phone: '08882282',
            role: 'admin',
            token: 'admin'
        }
    });
}

export const deleteTestAdmin = async () => {
    return prismaClient.user.deleteMany();
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
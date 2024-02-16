import supertest from "supertest";
import { web } from "../src/application/web.js";
import { logger } from "../src/application/logging.js";
import { createManyTestBook, createTestUser, createTestBook, deleteManyTestBook, deleteTestUser, getBookId } from "./test-util.js";


describe('list books data | GET /api/books', () => {
    beforeEach(async () => {
        await createManyTestBook();
    });

    afterEach(async () => {
        await deleteManyTestBook();
    });

    test('should retrieve books data with the correct format', async () => {
        const result = await supertest(web)
            .get('/api/books');

        expect(result.status).toBe(200);
        expect(result.body.data).toBeDefined();
        expect(result.body.data).toBeInstanceOf(Array);
    });

    test('should response 404 if no data found', async () => {
        await deleteManyTestBook();

        const result = await supertest(web)
            .get('/api/books');

        expect(result.status).toBe(404);
        expect(result.error).toBeDefined();
    });
});

describe('insert new book | POST /api/books', () => {

    beforeEach(async () => {
        await createTestUser();
    });

    afterEach(async () => {
        await deleteManyTestBook();
        await deleteTestUser();
    });

    test('should insert new book data', async () => {
        const result = await supertest(web)
            .post('/api/books')
            .set('Authorization', 'admin')
            .send({
                title: 'new book',
                author: 'new author',
                publisher: 'new publisher',
                stock: 10,
                status: 'available',
            });

        expect(result.status).toBe(200);
        expect(result.body.data).not.toBeNull();
        expect(result.body.data).not.toBeUndefined();
        expect(result.body.data.title).toBe('new book')
        expect(result.body.data.author).toBe('new author')
        expect(result.body.data.publisher).toBe('new publisher')
        expect(result.body.data.stock).toBe(10)
        expect(result.body.data.status).toBe('available')
    });

    test('should response 401 if unauthorized admin', async () => {
        const result = await supertest(web)
            .post('/api/books')
            .set('Authorization', 'wrongtoken')
            .send({
                title: 'new book',
                author: 'new author',
                publisher: 'new publisher',
                stock: 10,
                status: 'available',
            });

        expect(result.status).toBe(401);
        expect(result.error).toBeDefined();
    });

    test('should response 400 if sent empty mandatory field', async () => {
        const result = await supertest(web)
            .post('/api/books')
            .set('Authorization', 'admin')
            .send({
                title: '',
                author: 'new author',
                publisher: 'new publisher',
                stock: 10,
                status: 'available',
            });

        expect(result.status).toBe(400);
        expect(result.error).toBeDefined();
    });
});

describe('Update book | PATCH /api/books/:bookId', () => {
    beforeEach(async () => {
        await createTestUser();
        await createManyTestBook();
    });

    afterEach(async () => {
        await deleteManyTestBook();
        await deleteTestUser();
    });

    test('should update a single book data', async () => {
        const book = await getBookId();

        const result = await supertest(web)
            .patch(`/api/books/${book.id}`)
            .set('Authorization', 'admin')
            .send({
                title: 'Updated Title',
                status: 'Borrowed'
            });

        expect(result.status).toBe(200);
        expect(result.body.data).not.toBeNull();
        expect(result.body.data).not.toBeUndefined();
    });

    test('should response 404 if no book found', async () => {
        const book = await getBookId();

        const result = await supertest(web)
            .patch(`/api/books/${(book.id * 2)}`)
            .set('Authorization', 'admin')
            .send({
                title: 'Updated Title',
                status: 'Borrowed'
            });

        expect(result.status).toBe(404);
        expect(result.error).toBeDefined();
    });

    test('should response 401 if unauthorized admin', async () => {
        const book = await getBookId();

        const result = await supertest(web)
            .patch(`/api/books/${book.id}`)
            .set('Authorization', '')
            .send({
                title: 'Updated Title',
                status: 'Borrowed'
            });

        expect(result.status).toBe(401);
        expect(result.error).toBeDefined();
    });

    test('should response 400 if there`s empty mandatory field', async () => {
        const book = await getBookId();

        const result = await supertest(web)
            .patch(`/api/books/${book.id}`)
            .set('Authorization', 'admin');

        expect(result.status).toBe(400);
        expect(result.error).toBeDefined();
    });
});

describe('Delete book record | DELETE /api/books/:bookId', () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestBook();
    });

    afterEach(async () => {
        await deleteManyTestBook();
        await deleteTestUser();
    });

    test('should remove a single book data', async () => {
        const book = await getBookId();

        const result = await supertest(web)
            .delete(`/api/books/${book.id}`)
            .set('Authorization', 'admin');

        expect(result.status).toBe(200);
        expect(result.body.data).toBe("OK");
        expect(result.body.data).not.toBeUndefined();
    });

    test('should response 404 if no book record found', async () => {
        const book = await getBookId();

        const result = await supertest(web)
            .delete(`/api/books/${(book.id * 2)}`)
            .set('Authorization', 'admin');

        logger.warn(result);
        expect(result.status).toBe(404);
        expect(result.error).toBeDefined();
    });

    test('should response 401 if unauthorized admin', async () => {
        const book = await getBookId();

        const result = await supertest(web)
            .delete(`/api/books/${book.id}`)
            .set('Authorization', '');

        expect(result.status).toBe(401);
        expect(result.error).toBeDefined();
    });
});




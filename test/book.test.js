import supertest from "supertest";
import { web } from "../src/application/web.js";
import { logger } from "../src/application/logging.js";
import { createManyTestBook, deleteManyTestBook } from "./test-util.js";


describe('GET /api/books', () => {
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
});
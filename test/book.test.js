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


    test('should retrieve books data', async () => {
        const result = await supertest(web)
            .get('/api/books');

        logger.warn(JSON.parse(result.text));
    });
});
import supertest from "supertest";
import { createTestUser, deleteTestUser } from "./test-util.js";
import { web } from "../src/application/web.js";
import { logger } from "../src/application/logging.js";

describe('POST /api/users/register', () => {

    afterEach(async () => await deleteTestUser());

    test('should create new user record', async () => {
        const result = await supertest(web)
            .post('/api/users/register')
            .send({
                fullname: 'user',
                email: 'user@gmail.com',
                password: 'secret',
                phone: '088848484'
            });

        expect(result.status).toBe(200);
        expect(result.body.data).not.toBeNull();
        expect(result.body.data).toBeInstanceOf(Object)
    });

    test('should response 400 if empty any mandatory fields', async () => {
        const result = await supertest(web)
            .post('/api/users/register')
            .send({
                fullname: 'user',
                email: '',
                password: 'secret',
                phone: '088848484'
            });

        expect(result.status).toBe(400);
        expect(result.error).toBeDefined();
    });

    test('should response 409 if credential email already registered', async () => {
        await createTestUser(); 

        const result = await supertest(web)
            .post('/api/users/register')
            .send({
                fullname: 'user',
                email: 'user@gmail.com',
                password: 'secret',
                phone: '088848484'
            });

        expect(result.status).toBe(409);
        expect(result.error).toBeDefined();
    });
});
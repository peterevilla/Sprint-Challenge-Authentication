const server = require('./server');
const request = require('supertest')



describe('GET /', () => {
    it('has process.env.DB_ENV as "testing"', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    it('returns root route status 200 ok', () => {
        return request(server).get('/').expect(200)
    })

    it('check if endpoint is unauthorized', () => {
        return request(server).get('/api/jokes').expect(401)
    })

    })




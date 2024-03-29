import request from 'supertest';
import express from 'express';
import { constants } from 'http2';
import { UsersRoute } from '../../../app/internal/adapters/routes';

let app = null;
beforeEach(() => {
  app = express();
  UsersRoute(app);
});

describe('User Route Get', () => {
  it('GET /users/{id}', async () => {
    const res = await request(app).get('/users/123');
    const expected = 'This is a response from a GET request';
    expect(res.body.message).toEqual(expected);
    expect(res.statusCode).toBe(constants.HTTP_STATUS_OK);
  });
});

describe('User Route Create', () => {
  it('POST /users/', async () => {
    const res = await request(app).post('/users/');
    const expected = 'This is a response from a POST request';
    expect(res.body.message).toEqual(expected);
    expect(res.statusCode).toBe(constants.HTTP_STATUS_OK);
  });
});

describe('User Route Update', () => {
  it('PUT /users/{id}', async () => {
    const res = await request(app).put('/users/123');
    const expected = 'This is a response from an UPDATE request';
    expect(res.body.message).toEqual(expected);
    expect(res.statusCode).toBe(constants.HTTP_STATUS_OK);
  });
});

describe('User Route Delete', () => {
  it('DELETE /users/{id}', async () => {
    const res = await request(app).delete('/users/123');
    const expected = 'This is a response from a DELETE request';
    expect(res.body.message).toEqual(expected);
    expect(res.statusCode).toBe(constants.HTTP_STATUS_OK);
  });
});

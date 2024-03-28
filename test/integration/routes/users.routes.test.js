import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { constants } from 'http2';
import { UsersRoute } from '../../../app/internal/adapters/routes';
import { UserServices } from '../../../app/internal/core/services';
import { DatabaseConnection } from './mocks/database';
import { HandlerError } from '../../../app/internal/core/middlewares';

let app = null;
const body = { firstName: 'John', lastName: 'Doe', email: 'j@doe.com' };

describe('UsersRoutes', () => {
  beforeEach(() => {
    app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(DatabaseConnection);
    UsersRoute(app);
    app.use(HandlerError);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('GET /users/:id OK', async () => {
    UserServices.getById = jest
      .fn()
      .mockResolvedValue({ id: 1, name: 'John Doe' });

    const response = await request(app)
      .get('/users/1')
      .set('Accept', 'application/json');
    expect(response.status).toBe(constants.HTTP_STATUS_OK);
  });

  it('GET /users/:id fail', async () => {
    const error = new Error('Error');
    UserServices.getById = jest.fn().mockRejectedValue(error);

    const response = await request(app)
      .get('/users/1')
      .set('Accept', 'application/json');
    expect(response.status).toBe(constants.HTTP_STATUS_BAD_REQUEST);
  });

  it('POST /users OK', async () => {
    UserServices.create = jest
      .fn()
      .mockResolvedValue({ id: 1, name: 'John Doe' });

    const response = await request(app)
      .post('/users')
      .set('Accept', 'application/json')
      .send(body);
    expect(response.status).toBe(constants.HTTP_STATUS_OK);
  });

  it('POST /users OK fail', async () => {
    const error = new Error('Error');
    UserServices.create = jest.fn().mockRejectedValue(error);

    const response = await request(app)
      .post('/users')
      .set('Accept', 'application/json')
      .send(body);
    expect(response.status).toBe(constants.HTTP_STATUS_BAD_REQUEST);
  });

  it('PUT /users/:id OK', async () => {
    UserServices.update = jest
      .fn()
      .mockResolvedValue({ id: 1, name: 'John Doe' });

    const response = await request(app)
      .put('/users/1')
      .set('Accept', 'application/json')
      .send(body);
    expect(response.status).toBe(constants.HTTP_STATUS_CREATED);
  });

  it('PUT /users/:id fail', async () => {
    const error = new Error('Error');
    UserServices.update = jest.fn().mockRejectedValue(error);

    const response = await request(app)
      .put('/users/1')
      .set('Accept', 'application/json')
      .send(body);
    expect(response.status).toBe(constants.HTTP_STATUS_BAD_REQUEST);
  });

  it('DELETE /users/:id OK', async () => {
    UserServices.deleteByID = jest
      .fn()
      .mockResolvedValue({ id: 1, name: 'John Doe' });

    const response = await request(app)
      .delete('/users/1')
      .set('Accept', 'application/json');
    expect(response.status).toBe(constants.HTTP_STATUS_OK);
  });

  it('DELETE /users/:id fail', async () => {
    const error = new Error('Error');
    UserServices.deleteByID = jest.fn().mockRejectedValue(error);

    const response = await request(app)
      .delete('/users/1')
      .set('Accept', 'application/json');
    expect(response.status).toBe(constants.HTTP_STATUS_BAD_REQUEST);
  });
});

import request from 'supertest';
import bodyParser from 'body-parser';
import express from 'express';
import { constants } from 'http2';
import { AuthRoute } from '../../../app/internal/adapters/routes';
import { Configurations } from '../../../app/internal/core/middlewares';

describe('Auth Get Token', () => {
  let app = null;
  beforeEach(() => {
    app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(Configurations);
    AuthRoute(app);
  });

  it('GET /auth/token', async () => {
    const payload = {
      adminId: 123123,
    };
    const res = await request(app)
      .get('/auth/token')
      .send(payload)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
    const expected = 'Bearer';
    expect(res.body.tokenType).toEqual(expected);
    expect(res.statusCode).toBe(constants.HTTP_STATUS_OK);
  });
});

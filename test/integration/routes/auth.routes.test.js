import request from 'supertest';
import bodyParser from 'body-parser';
import express from 'express';
import { constants } from 'http2';
import { AuthRoute } from '../../../app/internal/adapters/routes';

let app = null;
beforeEach(() => {
  app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  AuthRoute(app);
});

describe('Auth Get Token', () => {
  it('GET /auth/token', async () => {
    const payload = {
        admin_id: 123123,
        expires_in: '2h'
    };
    const res = await request(app)
                .get('/auth/token')
                .send(payload)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json');
    const expected = "Bearer"
    expect(res.body.token_type).toEqual(expected)
    expect(res.statusCode).toBe(constants.HTTP_STATUS_OK);
  });
});
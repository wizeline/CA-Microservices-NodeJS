import request from 'supertest';
import express from 'express';
import { constants } from 'http2';
import { MainRoute } from '../../../app/internal/adapters/routes';

let app = null;
beforeEach(() => {
  app = express();
  MainRoute(app);
});

describe('MainRoutes', () => {
  it('GET /health', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(constants.HTTP_STATUS_OK);
  });
});

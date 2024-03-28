import request from 'supertest';
import App from '../../../app/server';

describe('Express App', () => {
  it('responds with CORS headers', async () => {
    const response = await request(App).get('/');
    expect(response.headers['access-control-allow-origin']).toBe('*');
  });
});

import { constants } from 'http2';
import { MainController } from '../../../app/internal/core/controllers';

describe('MainController', () => {
  it('health check is requested', () => {
    const req = {
      body: {
        admin_id: 123,
      },
    };
    const res = { json: jest.fn(), status: jest.fn() };
    const next = jest.fn();

    MainController.healthCheck(req, res, next);
    expect(res.status).toHaveBeenCalledWith(constants.HTTP_STATUS_OK);
  });
});

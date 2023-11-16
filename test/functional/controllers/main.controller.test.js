import { MainController } from '../../../app/internal/core/controllers';
import { constants } from 'http2';

describe('MainController', () => {
  it('health check is requested', () => {
    const res = { json: jest.fn((x) => x), status: jest.fn((x) => x) };
    const callback = () => {
      return null;
    };

    MainController.healthCheck(null, res, callback);
    expect(res.status).toHaveBeenCalledWith(constants.HTTP_STATUS_OK);
  });
});

import { constants } from 'http2';
import { AuthController } from '../../../app/internal/core/controllers';

describe('AuthController', () => {
  it('Create token is requested', () => {
    const req = {
      body: {
        adminId: 123,
      },
      config: { auth: { expiresIn: '1h', securityKey: 'foo' } },
    };
    const res = { json: jest.fn(), status: jest.fn() };
    const next = jest.fn();

    AuthController.getToken(req, res, next);
    expect(res.status).toHaveBeenCalledWith(constants.HTTP_STATUS_OK);
  });
});

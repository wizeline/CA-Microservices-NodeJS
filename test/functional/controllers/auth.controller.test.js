import { AuthController } from '../../../app/internal/core/controllers';
import { constants } from 'http2';

describe('AuthController', () => {
    it('Create token is requested', () => {
        const req = {
            body: {
              admin_id: 123,
              expires_in: "3h"
            }
          };
        const res = { json: jest.fn(), status: jest.fn() };
        const next = jest.fn();

        AuthController.getToken(req, res, next);
        expect(res.status).toHaveBeenCalledWith(constants.HTTP_STATUS_OK);
    });
});
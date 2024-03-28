import { Adapters } from '../../../app/internal/adapters';
import { Auth } from '../../../app/internal/core/middlewares';

const { JWT } = Adapters.Auth;

const req = {
  headers: {
    authorization: 'Bearer valid_token',
  },
  path: '/users/some-route',
  defaultConfig: {
    auth: {
      secretKey: 'your_secret_key',
    },
  },
};

const res = {};
const next = jest.fn();
describe('AuthMiddleware', () => {
  it('should call next if token is valid and path is in tokenPaths', () => {
    jest.spyOn(JWT, 'verifyToken').mockReturnValueOnce(true);
    Auth(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  it('should call next if token is not provided', () => {
    req.headers.authorization = undefined;
    Auth(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  it('should call next if token is "undefined"', () => {
    req.headers.authorization = 'Bearer undefined';
    Auth(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  it('should call next if path is not in tokenPaths', () => {
    req.path = '/some-other-route';
    Auth(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});

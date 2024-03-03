import { Logger } from '../../../app/internal/core/middlewares';

describe('LoggerMiddleware', () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = {
      path: '/test',
    };
    res = {};
    next = jest.fn();
  });

  it('should attach a logger to the request object', () => {
    Logger(req, res, next);
    expect(req.logger).toBeDefined();
    expect(req.logger.info).toBeDefined();
  });

  it('should call the next function', () => {
    Logger(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});

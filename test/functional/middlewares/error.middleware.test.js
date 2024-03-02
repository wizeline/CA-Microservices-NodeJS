import { constants } from 'http2';
import { HandlerError } from '../../../app/internal/core/middlewares';

describe('HandlerErrorMiddleware', () => {
  it('should send a JSON response with the error message and set status code', () => {
    const errorMessage = 'This is an error message';
    const errorStatus = constants.HTTP_STATUS_BAD_REQUEST;
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
    const next = jest.fn();

    HandlerError(
      { message: errorMessage, status: errorStatus },
      null,
      res,
      next,
    );

    expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    expect(res.status).toHaveBeenCalledWith(errorStatus);
    expect(next).not.toHaveBeenCalled(); // Ensure next function is not called
  });
});

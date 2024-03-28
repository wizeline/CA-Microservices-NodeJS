import { constants } from 'http2';
import { Pool } from 'pg';
import { DatabaseConnection } from '../../../app/internal/core/middlewares'; // Adjust the import path as per your project structure

jest.mock('pg', () => ({
  Pool: jest.fn(() => ({
    connect: jest.fn(),
  })),
}));

describe('DatabaseConnectionMiddleware', () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = {
      config: {
        db: {
          user: 'test_user',
          password: 'test_password',
          host: 'test_host',
          port: 'test_port',
          database: 'test_database',
        },
      },
    };
    res = {};
    next = jest.fn();
  });

  it('should call next() with error if database connection fails', () => {
    const mockError = new Error('Connection error');
    const mockConnect = jest.fn((callback) => callback(mockError));

    Pool.mockImplementationOnce(() => ({ connect: mockConnect }));

    DatabaseConnection(req, res, next);

    expect(next).toHaveBeenCalledWith({
      message: mockError,
      code: constants.HTTP_STATUS_INTERNAL_SERVER_ERROR,
    });
  });

  it('should call next() with no error if database connection succeeds', () => {
    const mockClient = {};
    const mockRelease = jest.fn();
    const mockConnect = jest.fn((callback) =>
      callback(null, mockClient, mockRelease),
    );

    Pool.mockImplementationOnce(() => ({ connect: mockConnect }));

    DatabaseConnection(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(req.db.client).toEqual(mockClient);
    expect(req.db.release).toEqual(mockRelease);
  });
});

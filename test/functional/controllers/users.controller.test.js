import { constants } from 'http2';
import { UsersController } from '../../../app/internal/core/controllers';
import { UserServices } from '../../../app/internal/core/services';

describe('UsersController', () => {
  const buildRequest = (params = {}, body = {}) => ({
    db: { client: jest.fn() },
    params,
    body,
  });
  const body = { firstName: 'John', lastName: 'Doe', email: 'j@doe.com' };
  const params = { id: '123' };

  const reqGet = buildRequest({ id: '123' });
  const reqCreate = buildRequest(null, body);
  const reqUpdate = buildRequest(params, body);

  const res = { status: jest.fn().mockReturnValue({ json: jest.fn() }) };
  const next = jest.fn();

  it('should get user by id', async () => {
    UserServices.getById = jest.fn().mockResolvedValueOnce(params);
    await UsersController.getById(reqGet, res, next);
    expect(res.status).toHaveBeenCalledWith(constants.HTTP_STATUS_OK);
  });

  it('should fail at get user by id', async () => {
    const error = new Error('default');
    UserServices.getById = jest.fn().mockRejectedValueOnce(error);
    await UsersController.getById(reqGet, res, next);
    expect(next).toHaveBeenCalledWith({
      message: error,
      status: constants.HTTP_STATUS_BAD_REQUEST,
    });
  });

  it('should create user', async () => {
    UserServices.create = jest.fn().mockResolvedValueOnce(params);
    await UsersController.create(reqCreate, res, next);
    expect(res.status).toHaveBeenCalledWith(constants.HTTP_STATUS_OK);
  });

  it('should fail at create user', async () => {
    const error = new Error('default');
    UserServices.create = jest.fn().mockRejectedValueOnce(error);
    await UsersController.create(reqCreate, res, next);
    expect(next).toHaveBeenCalledWith({
      message: error,
      status: constants.HTTP_STATUS_BAD_REQUEST,
    });
  });

  it('should update user by id', async () => {
    UserServices.update = jest.fn().mockResolvedValueOnce(params);
    await UsersController.update(reqUpdate, res, next);
    expect(res.status).toHaveBeenCalledWith(constants.HTTP_STATUS_CREATED);
  });

  it('should fail at get user by id', async () => {
    const error = new Error('default');
    UserServices.update = jest.fn().mockRejectedValueOnce(error);
    await UsersController.update(reqUpdate, res, next);
    expect(next).toHaveBeenCalledWith({
      message: error,
      status: constants.HTTP_STATUS_BAD_REQUEST,
    });
  });

  it('should delete user by id', async () => {
    UserServices.deleteByID = jest.fn().mockResolvedValueOnce(params);
    await UsersController.delete(reqGet, res, next);
    expect(res.status).toHaveBeenCalledWith(constants.HTTP_STATUS_OK);
  });

  it('should fail at delete user by id', async () => {
    const error = new Error('default');
    UserServices.deleteByID = jest.fn().mockRejectedValueOnce(error);
    await UsersController.delete(reqGet, res, next);
    expect(next).toHaveBeenCalledWith(error);
  });
});

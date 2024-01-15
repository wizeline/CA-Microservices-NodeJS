import { constants } from 'http2';
import { UsersController } from '../../../app/internal/core/controllers';

describe('UsersController GetByID', () => {
  it('Get by ID is requested', () => {
    const res = { json: jest.fn((x) => x), status: jest.fn((x) => x) };
    const callback = () => null;

    UsersController.getById(null, res, callback);
    expect(res.status).toHaveBeenCalledWith(constants.HTTP_STATUS_OK);
  });
});

describe('UsersController Create', () => {
  it('Create is requested', () => {
    const res = { json: jest.fn((x) => x), status: jest.fn((x) => x) };
    const callback = () => null;

    UsersController.create(null, res, callback);
    expect(res.status).toHaveBeenCalledWith(constants.HTTP_STATUS_OK);
  });
});

describe('UsersController Update', () => {
  it('Update is requested', () => {
    const res = { json: jest.fn((x) => x), status: jest.fn((x) => x) };
    const callback = () => null;

    UsersController.update(null, res, callback);
    expect(res.status).toHaveBeenCalledWith(constants.HTTP_STATUS_OK);
  });
});

describe('UsersController Delete', () => {
  it('Delete is requested', () => {
    const res = { json: jest.fn((x) => x), status: jest.fn((x) => x) };
    const callback = () => null;

    UsersController.delete(null, res, callback);
    expect(res.status).toHaveBeenCalledWith(constants.HTTP_STATUS_OK);
  });
});

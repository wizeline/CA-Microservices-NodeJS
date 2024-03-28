import { v4 as uuidv4 } from 'uuid';
import { UserServices } from '../../../app/internal/core/services';

const userMock = (id) => ({
  id,
  first_name: 'John',
  last_name: 'Doe',
  email: 'john.doe@example.com',
});

const userResponseMock = (id) => {
  const user = userMock(id);
  return {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
  };
};

const mockDB = {
  query: jest.fn(),
};
beforeEach(() => {
  jest.clearAllMocks();
});

describe('UserServices Get By ID', () => {
  it('should get user by id', async () => {
    const id = uuidv4();
    const mockResult = {
      rows: [userMock(id)],
    };
    mockDB.query.mockResolvedValue(mockResult);
    const result = await UserServices.getById(mockDB, id);

    expect(result).toEqual({
      success: true,
      message: 'Success',
      user: userResponseMock(id),
    });
    expect(mockDB.query).toHaveBeenCalledWith(
      'SELECT id, first_name, last_name, email FROM users WHERE id=$1',
      [id],
    );
  });
  it('should get user empty by id', async () => {
    const id = uuidv4();
    const mockResult = {
      rows: [],
    };
    mockDB.query.mockResolvedValue(mockResult);
    const result = await UserServices.getById(mockDB, id);

    expect(result).toEqual({
      success: false,
      message: 'No Content',
      user: {},
    });
    expect(mockDB.query).toHaveBeenCalledWith(
      'SELECT id, first_name, last_name, email FROM users WHERE id=$1',
      [id],
    );
  });
  it('should fail at get user', async () => {
    const id = uuidv4();
    const error = new Error('Database error');
    mockDB.query.mockRejectedValue(error);
    const result = await UserServices.getById(mockDB, id);

    expect(result).toBe(error);
  });
});

describe('UserServices Create', () => {
  it('should create', async () => {
    const id = uuidv4();
    const user = userMock(id);
    const mockResult = {
      rows: [user],
    };
    mockDB.query.mockResolvedValue(mockResult);
    const response = await UserServices.create(
      mockDB,
      user.first_name,
      user.last_name,
      user.email,
    );
    expect(response).not.toBeNull();
  });
  it('should fail at create', async () => {
    const id = uuidv4();
    const user = userMock(id);
    const error = new Error('Database error');
    mockDB.query.mockRejectedValue(error);
    const response = await UserServices.create(
      mockDB,
      user.first_name,
      user.last_name,
      user.email,
    );
    expect(response).toBe(error);
  });
});

describe('UserServices Update', () => {
  it('should update', async () => {
    const id = uuidv4();
    const user = userMock(id);
    const mockResult = {
      rows: [user],
    };
    mockDB.query.mockResolvedValue(mockResult);
    const response = await UserServices.update(
      mockDB,
      user.first_name,
      user.last_name,
      user.email,
    );
    expect(response).not.toBeNull();
  });
  it('should fail at update', async () => {
    const id = uuidv4();
    const user = userMock(id);
    const error = new Error('Database error');
    mockDB.query.mockRejectedValue(error);
    const response = await UserServices.update(
      mockDB,
      user.first_name,
      user.last_name,
      user.email,
    );
    expect(response).toBe(error);
  });
});

describe('UserServices Delete', () => {
  it('should delete', async () => {
    const id = uuidv4();
    const user = userMock(id);
    const mockResult = {
      rows: [user],
    };
    mockDB.query.mockResolvedValue(mockResult);
    const response = await UserServices.deleteByID(mockDB, id);
    expect(response).not.toBeNull();
  });
  it('should not delete on inexistent id', async () => {
    const id = uuidv4();
    const mockResult = {
      rows: [],
    };
    mockDB.query.mockResolvedValue(mockResult);
    const response = await UserServices.deleteByID(mockDB, id);
    expect(response).not.toBeNull();
  });
  it('should fail at delete', async () => {
    const id = uuidv4();
    const error = new Error('Database error');
    mockDB.query.mockRejectedValue(error);
    const response = await UserServices.deleteByID(mockDB, id);
    expect(response).toBe(error);
  });
});

import { UserServices } from '../../../app/internal/core/services';

describe('UserServices Get By ID', () => {
  it('should get by id', () => {
    const expected = { message: 'This is a response from a get request' };
    const response = UserServices.getById();
    expect(response).toEqual(expected);
  });
});

describe('UserServices Create', () => {
    it('should create', () => {
      const expected = { message: 'This is a response from a post request' };
      const response = UserServices.create();
      expect(response).toEqual(expected);
    });
  });

describe('UserServices Update', () => {
it('should update by id', () => {
    const expected = { message: 'This is a response from a update request' };
    const response = UserServices.update();
    expect(response).toEqual(expected);
});
});

describe('UserServices Delete', () => {
it('should delete by id', () => {
    const expected = { message: 'This is a response from a delete request' };
    const response = UserServices.delete();
    expect(response).toEqual(expected);
});
});

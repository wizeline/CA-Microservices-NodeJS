import { AuthServices } from '../../../app/internal/core/services';

describe('AuthServices', () => {
  it('should get token', () => {
    const expected = "Bearer"
    const response = AuthServices.getToken(123213, "3h");
    expect(response.token_type).toEqual(expected)
  });
});

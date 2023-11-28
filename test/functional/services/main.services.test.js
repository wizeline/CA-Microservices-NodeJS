import { MainServices } from '../../../app/internal/core/services';

describe('MainServices', () => {
  it('should get health check', () => {
    const expected = { message: 'OK 1.0.0' };
    const response = MainServices.getHealthCheck();
    expect(response).toEqual(expected);
  });
});

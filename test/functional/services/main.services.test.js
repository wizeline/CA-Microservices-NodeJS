import { MainServices } from '../../../app/internal/core/services';

describe('MainServices', () => {
  it('should get health check', () => {
    const expected = { message: 'OK' };
    const response = MainServices.getHealthCheck();
    expect(response).toEqual(expected);
  });
});

import Domain from '../domain/index.js';

const {
  Models: { Responses },
} = Domain;

/**
 * MainServices class for handling main services.
 * @class
 */
class MainServices {
  /**
   * Get health check response.
   * @returns {import('../domain/models/responses.models.js').SimpleResponse} The health check response.
   */
  getHealthCheck() {
    return Responses.simple('Hello world');
  }
}

export default MainServices;

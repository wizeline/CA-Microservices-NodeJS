import { Domain } from '../domain';

const {
  Models: { Responses },
} = Domain;
/**
 * Get health check response.
 * @returns {import('../domain/models/responses.models.js').SimpleResponse} The health check response.
 */
const getHealthCheck = () => Responses.simple('Hello world');

export const MainServices = { getHealthCheck };

/**
 * @module Services/Main
 */

import { Domain } from '../domain';

const {
  Models: { Responses },
} = Domain;

/**
 * Get health check response.
 * @returns {import('../domain/models/responses.models').SimpleResponse} The health check response.
 */
const getHealthCheck = () => Responses.simple(`OK`);

export const MainServices = { getHealthCheck };

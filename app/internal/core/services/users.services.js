/** @module Services/Users */

import { Domain } from '../domain';

const {
  Models: { Responses },
} = Domain;

/**
 * Get user by ID.
 * @function
 * @returns {import('../domain/models/responses.models.js').SimpleResponse} The response for the get by ID request.
 */
const getById = () => Responses.simple('This is a response from a GET request');

/**
 * Create a new user.
 * @function
 * @returns {import('../domain/models/responses.models.js').SimpleResponse} The response for the create request.
 */
const create = () => Responses.simple('This is a response from a POST request');

/**
 * Update an existing user.
 * @function
 * @returns {import('../domain/models/responses.models.js').SimpleResponse} The response for the update request.
 */
const update = () =>
  Responses.simple('This is a response from an UPDATE request');

/**
 * Delete a user by ID.
 * @function
 * @returns {import('../domain/models/responses.models.js').SimpleResponse} The response for the delete request.
 */
const deleteByID = () =>
  Responses.simple('This is a response from a DELETE request');

export const UserServices = { getById, create, update, deleteByID };

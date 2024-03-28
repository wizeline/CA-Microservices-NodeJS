/** @module Services/Users */

import { v4 as uuidv4 } from 'uuid';
import { Domain } from '../domain';

const {
  Models: { Responses },
} = Domain;

const valueMap = {
  firstName: 'first_name',
  lastName: 'last_name',
  email: 'email',
};

/** @typedef { import('pg').PoolClient} db */
/** @typedef { import('../domain/models/responses.models.js').UserResponse} UserResponse */
/** @typedef { import('../domain/models/responses.models.js').SimpleResponse } SimpleResponse */

/**
 * Get user by ID.
 * @function
 * @param {db} db - DB client for the connection to the database.
 * @param {string} id - The UUID for the user in the database.
 * @returns {UserResponse} The response for the get by ID request.
 */
const getById = async (db, id) => {
  try {
    const query =
      'SELECT id, first_name, last_name, email FROM users WHERE id=$1';
    const result = await db.query(query, [id]);
    return result.rows.length
      ? Responses.userResponse(
          id,
          result.rows[0].first_name,
          result.rows[0].last_name,
          result.rows[0].email,
          true,
          'Success',
        )
      : Responses.userResponse();
  } catch (error) {
    return error;
  }
};

/**
 * Create a new user.
 * @function
 * @param {db} db - DB client for the connection to the database.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} email - The email from the user.
 * @returns {UserResponse} The response for the create request.
 */
const create = async (db, firstName, lastName, email) => {
  try {
    const randomUuid = uuidv4();
    const query =
      'INSERT INTO users (id, first_name, last_name, email) VALUES ($1, $2, $3, $4)';
    await db.query(query, [randomUuid, firstName, lastName, email]);
    return Responses.userResponse(
      randomUuid,
      firstName,
      lastName,
      email,
      true,
      'Created',
    );
  } catch (error) {
    return error;
  }
};

/**
 * Update an existing user.
 * @function
 * @param {db} db - DB client for the connection to the database.
 * @param {string} id - The id of the user.
 * @param {Map} body - THe fields to be updated.
 * @returns {SimpleResponse} The response for the update request.
 */
const update = async (db, id, body) => {
  try {
    const updates = [];
    const values = [id];
    let index = 2;
    Object.entries(body).forEach(([key, value]) => {
      updates.push(`${valueMap[key]} = $${index}`);
      values.push(value);
      index += 1;
    });
    const query = `UPDATE users SET ${updates.join(',')} WHERE id = $1`;
    await db.query(query, values);
    return Responses.simple(`User with ${id} has been updated.`);
  } catch (error) {
    return error;
  }
};

/**
 * Delete a user by ID.
 * @param {db} db - DB client for the connection to the database.
 * @param {string} id - The id of the user.
 * @function
 * @returns {SimpleResponse} The response for the delete request.
 */
const deleteByID = async (db, id) => {
  try {
    let query = 'SELECT id FROM users WHERE id=$1';
    const result = await db.query(query, [id]);
    if (result.rows.length === 0) {
      return Responses.simple(`User with ${id} is not in the database.`);
    }
    query = 'DELETE FROM users WHERE id = $1';
    db.query(query, [id]);
    return Responses.simple(`User with ${id} has been deleted.`);
  } catch (error) {
    return error;
  }
};

export const UserServices = { getById, create, update, deleteByID };

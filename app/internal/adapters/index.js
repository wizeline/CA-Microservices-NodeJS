import { JWT } from './auth';
import { AuthRoute, MainRoute, UsersRoute } from './routes';

/**
 * Adapters module containing various adapters.
 * @namespace
 * @property {object} Auth - Authentication adapter.
 * @property {object} Routes - Routes adapter.
 */
export const Adapters = {
  Auth: { JWT },
  Routes: { MainRoute, AuthRoute, UsersRoute },
};

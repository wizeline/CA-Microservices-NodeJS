import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import swaggerUI from 'swagger-ui-express';
import { Adapters } from '../internal/adapters';
import {
  Auth,
  Configurations,
  DatabaseConnection,
  HandlerError,
  Logger,
} from '../internal/core/middlewares';
import swaggerSpec from '../../swagger';

const { Routes } = Adapters;

const App = express();

// Enable Cross-Origin Resource Sharing (CORS)
App.use(cors());

// Parse incoming JSON requests
App.use(bodyParser.json());

// Parse incoming URL-encoded requests
App.use(bodyParser.urlencoded({ extended: false }));

// Apply global configurations middleware
App.use(Configurations);

// Apply swagger middleware
App.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Apply database middleware
App.use(DatabaseConnection);

// Apply logger middleware
App.use(Logger);

// Apply authentication middleware
App.use(Auth);

// Set up routes
Routes.AuthRoute(App);
Routes.MainRoute(App);
Routes.UsersRoute(App);

// Apply error handler middleware
App.use(HandlerError);

export default App;

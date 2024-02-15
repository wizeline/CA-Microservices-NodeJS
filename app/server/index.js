import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { Adapters } from '../internal/adapters';
import {
  Logger,
  HandlerError,
  Configurations,
  Auth,
} from '../internal/core/middlewares';

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

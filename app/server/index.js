import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { Adapters } from '../internal/adapters';
import { Logger, HandlerError } from '../internal/core/middlewares';

const { Routes } = Adapters;

const App = express();
App.use(cors());
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: false }));
App.use(Logger);

Routes.MainRoute(App);
Routes.UsersRoute(App);

App.use(HandlerError);
export default App;

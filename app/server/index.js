import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { Adapters } from '../internal/adapters';

const { Routes } = Adapters;

const App = express();
App.use(cors());
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: false }));

Routes.MainRoute(App);
Routes.UsersRoute(App);

export default App;

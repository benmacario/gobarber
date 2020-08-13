import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

const route = new Router();

route.post('/user', UserController.store);
route.post('/session', SessionController.store);

export default route;

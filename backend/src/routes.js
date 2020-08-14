import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import authMiddleware from './app/middlewares/auth';

const route = new Router();

route.post('/user', UserController.store);
route.post('/session', SessionController.store);

route.use(authMiddleware);

route.put('/users', UserController.update);

export default route;

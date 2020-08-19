import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

import authMiddleware from './app/middlewares/auth';

const route = new Router();
const upload = multer(multerConfig);

route.post('/user', UserController.store);
route.post('/session', SessionController.store);

route.post('/files', upload.single('file'), (req, res) => {
  return res.json({ status: 'OK' });
});

route.use(authMiddleware);

route.put('/users', UserController.update);

export default route;

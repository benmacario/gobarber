import { Router } from 'express';

const routes = new Router();

routes.get('/teste', (req, res) => {
  const { name } = req.query;
  return res.json({ messege: `Helo ${name}` });
});

export default routes;

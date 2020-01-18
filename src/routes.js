import { Router } from 'express';
import HelloController from './app/http/controllers/HelloController';

const router = new Router();

const url = path => `/${process.env.API_VERSION}${path}`;

router.get(url('/'), HelloController.index);

export default router;

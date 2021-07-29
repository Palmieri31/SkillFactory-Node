import {Router} from 'express';
const router = Router();

import * as saludoCtrl from '../controllers/saludo.controller.js';

router.post('/', saludoCtrl.getSaludo);

export default router;
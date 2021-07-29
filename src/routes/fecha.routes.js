import {Router} from 'express';
const router = Router();

import * as fechaCtrl from '../controllers/fecha.controller.js';

router.get('/', fechaCtrl.getFecha);

export default router;
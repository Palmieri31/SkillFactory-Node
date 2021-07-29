import {Router} from 'express';
const router = Router();

import * as archivoCtrl from '../controllers/archivo.controller.js';

router.get('/', archivoCtrl.getArchivo);

export default router;
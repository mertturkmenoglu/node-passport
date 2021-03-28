import express from 'express';

import appController from '../controllers';

const router = express.Router();

router.get('/', appController.getIndexPage);
router.get('/auth/login', appController.getLoginPage);
router.get('/auth/google', (_req, res) => res.send('AUTH_GOOGLE'));
router.get('/auth/logout', (_req, res) => res.send('AUTH_LOGOUT'));

export default router;
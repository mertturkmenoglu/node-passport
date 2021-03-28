import express from 'express';
import passport from 'passport';

import appController from '../controllers';

const router = express.Router();

router.get('/', appController.getIndexPage);
router.get('/auth/login', appController.getLoginPage);

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile']
}));

router.get('/auth/logout', (_req, res) => res.send('AUTH_LOGOUT'));
router.get('/auth-success', appController.getAuthSuccess);

export default router;
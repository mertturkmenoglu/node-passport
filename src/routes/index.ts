import express from 'express';
import passport from 'passport';

import appController from '../controllers';
import isAuth from "../middlewares/isAuth";

const router = express.Router();

router.get('/', appController.getIndexPage);
router.get('/auth/login', appController.getLoginPage);

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile']
}));

router.get('/auth/github', passport.authenticate('github', {
  scope: ['profile'],
}));

router.get('/auth/logout', appController.logout);
router.get('/auth-success', passport.authenticate('google'), appController.getAuthSuccess);
router.get('/auth/github-callback', passport.authenticate('github'), appController.getGithubCallback);
router.get('/user', isAuth, appController.getUserPage);

export default router;
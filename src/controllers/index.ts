import { Request, Response } from 'express';

const getIndexPage = (_req: Request, res: Response) => {
  const renderOptions = {
    path: '/',
    pageTitle: 'Home',
  };

  return res.render('index', renderOptions);
}

const getLoginPage = (_req: Request, res: Response) => {
  const renderOptions = {
     path: '/auth/login',
    pageTitle: 'Login',
  };

  return res.render('login', renderOptions);
}

export default {
  getIndexPage,
  getLoginPage,
};
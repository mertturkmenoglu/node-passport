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

const getAuthSuccess = (_req: Request, res: Response) => {
  // const renderOptions = {
  //    path: '/auth/login',
  //   pageTitle: 'Login',
  // };

  // return res.render('login', renderOptions);
  return res.send('AUTH_SUCCESS');
}

export default {
  getIndexPage,
  getLoginPage,
  getAuthSuccess,
};
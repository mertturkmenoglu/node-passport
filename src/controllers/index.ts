import { Request, Response } from 'express';

const getIndexPage = (_req: Request, res: Response) => {
  const renderOptions = {
    path: '/',
    pageTitle: 'Home',
  };

  return res.render('index', renderOptions);
}

export default {
  getIndexPage,
};
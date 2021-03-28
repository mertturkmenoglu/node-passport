import {Request, Response} from 'express';

const getIndexPage = (req: Request, res: Response) => {
    const renderOptions = {
        path: '/',
        pageTitle: 'Home',
        user: req.user || null,
    };

    return res.render('index', renderOptions);
}

const getLoginPage = (_req: Request, res: Response) => {
    const renderOptions = {
        path: '/auth/login',
        pageTitle: 'Login',
        user: null,
    };

    return res.render('login', renderOptions);
}

const getAuthSuccess = (_req: Request, res: Response) => {
    return res.redirect('/user');
}

const logout = (req: Request, res: Response) => {
    req.logout();
    res.redirect('/');
}

const getUserPage = (req: Request, res: Response) => {
    const renderOptions = {
        path: '/user',
        pageTitle: 'User',
        user: req.user,
    };

    return res.render('user', renderOptions);
}

export default {
    getIndexPage,
    getLoginPage,
    getAuthSuccess,
    logout,
    getUserPage,
};
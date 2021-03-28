import {NextFunction, Request, Response} from "express";

const isAuth = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
        res.redirect('/auth/login');
    } else {
        next();
    }
}

export default isAuth;
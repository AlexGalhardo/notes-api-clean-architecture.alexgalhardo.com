import { Middleware } from "@/presentation/middleware/ports";
import { Request, Response, NextFunction } from "express";

export const adaptMiddleware = (middleware: Middleware) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const request = {
            accessToken: req.headers.authorization,
            requesterId: req.headers["user-agent"],
        };
        const httpResponse = await middleware.handle(request);
        if (httpResponse.statusCode === 200) {
            Object.assign(req, httpResponse.body);
            next();
        } else {
            res.status(httpResponse.statusCode).json({
                error: httpResponse.body.message,
            });
        }
    };
};

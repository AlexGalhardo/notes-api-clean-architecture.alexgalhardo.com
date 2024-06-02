import { HttpRequest } from "@/presentation/controllers/ports";
import { Request, Response } from "express";
import { WebController } from "@/presentation/controllers";

export const adaptRoute = (controller: WebController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            headers: req.headers,
            body: req.body,
            params: req.params,
        };
        const httpResponse = await controller.handle(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

import { NextFunction, Response, Request } from "express";

export default function resHeaders(req: Request, res: Response, next: NextFunction){
    
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

    return next();
}
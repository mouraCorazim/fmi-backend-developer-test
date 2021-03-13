import {Request, Response} from 'express'

export default function registerDoctor(req: Request, res: Response){

    return res.status(200)
              .json({"message": "registered"})
}
import express, {Request, Response} from 'express'

const app = express()

app.get("/", (req: Request, res: Response) => res.json({"Amor": "Amor é a chave!!!"}))


export default app

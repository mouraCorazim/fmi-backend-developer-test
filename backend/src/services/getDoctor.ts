import {Request, Response} from 'express'

export default function getDoctor(req: Request, res: Response){
    const data = { "uf"         : "SP",
                   "crm"        : "43.456.43",
                   "tel"        : "(11)2193-3352",
                   "cel"        : "(11)96847-5194",
                   "cep"        : "04176-260",
                   "name"       : "LUCAS MOURA CORAZIM",
                   "bairro"     : "Jardim Vergueiro (Sacomã)",
                   "address"    : "425",
                   "logradouro" : "Rua Engenheiro José Bueno Bicalho",
                   "localidade" : "São Paulo",
                   "specialty1" : "Mágico",
                   "specialty2" : "Atleta" ,
                   "complemento": "bloco 06 apto 92" }

    return res.status(200).json(data)
}
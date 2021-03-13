import express from 'express'
import resHeaders from './middlewares/resHeaders'
import getDoctor from "./services/getDoctor"
import registerDoctor from './services/registerDoctor'

const api = express()

api.disable("x-powered-by")

api.use(resHeaders)

api.post("/register/doctor", registerDoctor)

api.get("/get/doctor", getDoctor)

api.get("/get/doctors")

api.patch("/update/doctor")

api.patch("/deactivate/doctor")


export default api

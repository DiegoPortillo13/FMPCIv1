import Express from "express";
import {
    getAllI,
    getOneI,
    addOneI,
    updateOneI,
    deleteOneI
} from "../controllers/InvController.js";
const irouter = Express.Router()

irouter.get('/', getAllI)
irouter.get('/:idMaterial', getOneI)
irouter.post('/', addOneI)
irouter.put('/:idMaterial', updateOneI)
irouter.delete('/:idMaterial', deleteOneI)

export default irouter
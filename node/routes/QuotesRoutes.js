import Express from "express";
import {
    getAllC,
     getOneC,
    addOneC,
    updateOneC,
    deleteOneC
} from "../controllers/QuotesController.js";
const qrouter = Express.Router()

qrouter.get('/', getAllC)
qrouter.get('/:numCotizacion', getOneC)
qrouter.post('/', addOneC)
qrouter.put('/:numCotizacion', updateOneC)
qrouter.delete('/:numCotizacion', deleteOneC)

export default qrouter
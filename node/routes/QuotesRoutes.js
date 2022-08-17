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
qrouter.get('/:numCotizaciones', getOneC)
qrouter.post('/', addOneC)
qrouter.put('/:numCotizaciones', updateOneC)
qrouter.delete('/:numCotizaciones', deleteOneC)

export default qrouter
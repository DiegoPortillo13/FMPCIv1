import  Express  from "express";
import { addOne, deleteOne, getAll, getOne, updateOne } from "../controllers/ProjectController.js";
const router = Express.Router()

router.get('/', getAll)
router.get('/:numProyecto', getOne)
router.post('/', addOne)
router.put('/:numProyecto', updateOne)
router.delete('/:numProyecto', deleteOne)

export default router
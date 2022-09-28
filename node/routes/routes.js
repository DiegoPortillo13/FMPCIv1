import  Express  from "express";
import { addOne, deleteOne, getAll, getOne, updateOne } from "../controllers/ProjectController.js";
const router = Express.Router()

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', addOne)
router.put('/:id', updateOne)
router.delete('/:numProyecto', deleteOne)

export default router
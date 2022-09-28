import ProjectModel from "../models/ProjectModel.js";

export const getAll = async (req, res) => {
    try {
        const projects = await ProjectModel.findAll()
        res.json(projects)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getOne = async (req, res) => {
    try {
        const project = await ProjectModel.findAll({
            where: {numProyecto: req.params.numProyecto}
        })
        res.json(project)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const addOne = async (req, res) => {
    try {
        await ProjectModel.create(req.body)
        res.json({
            "message": "Proyecto agregado correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateOne = async (req, res) => {
    try {
        await ProjectModel.update(req.body, {
            where: { numProyecto: req.params.numProyecto }
        })
        res.json({
            "message": "Proyecto actulizado correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteOne = async (req,res)=>{
    try {
        await ProjectModel.destroy({
            where: { numProyecto: req.params.numProyecto }
        })
        res.json({
            "message": "Proyecto eleminado"
        })
        
    } catch (error) {
        res.json({ message: error.message }) 
    }
}

import QuoteModel from "../models/QuoteModel.js"

export const getAllC = async (req, res) => {
    try {
        const projects = await QuoteModel.findAll()
        res.json(projects)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getOneC = async (req, res) => {
    try {
        const project = await QuoteModel.findAll({
            where: {
                numCotizacion: req.params.numCotizacion
            }
        })
        res.json(project)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const addOneC = async (req, res) => {
    try {
        await QuoteModel.create(req.body)
        res.json({
            "message": "Cotizacion agregado correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateOneC = async (req, res) => {
    try {
        await QuoteModel.update(req.body, {
            where: { numCotizacion: req.params.numCotizacion }
        })
        res.json({
            "message": "Cotizacion actulizado correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteOneC = async (req,res)=>{
    try {
        await QuoteModel.destroy({
            where: { numCotizacion: req.params.numCotizacion }
        })
        res.json({
            "message": "Cotizacion eleminado"
        })
        
    } catch (error) {
        res.json({ message: error.message }) 
    }
}

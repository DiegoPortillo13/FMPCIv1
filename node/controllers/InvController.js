import InvModel from "../models/InvModel.js"

export const getAllI = async (req, res) => {
    try {
        const inv = await InvModel.findAll()
        res.json(inv)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getOneI = async (req, res) => {
    try {
        const inv = await InvModel.findAll({
            where: {
                idMaterial: req.params.idMaterial
            }
        })
        res.json(inv)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const addOneI = async (req, res) => {
    try {
        await InvModel.create(req.body)
        res.json({
            "message": "Piezas agregadas correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateOneI = async (req, res) => {
    try {
        await InvModel.update(req.body, {
            where: { idMaterial: req.params.idMaterial }
        })
        res.json({
            "message": "Pieza actulizada correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteOneI = async (req,res)=>{
    try {
        await InvModel.destroy({
            where: { idMaterial: req.params.idMaterial }
        })
        res.json({
            "message": "Pieza eleminada"
        })
        
    } catch (error) {
        res.json({ message: error.message }) 
    }
}

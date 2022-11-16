import { DataTypes } from "sequelize";
import db from "../database/db.js";

const InvModel = db.define('inventario', {
    

idMaterial:{type:DataTypes.STRING},
nomMaterial:{type:DataTypes.STRING}, 
pzMaterial:{type:DataTypes.STRING}, 
mMaterial:{type:DataTypes.STRING},
numProyecto:{type:DataTypes.STRING},  

})
InvModel.removeAttribute('id');

 export default  InvModel
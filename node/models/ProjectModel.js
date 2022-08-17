import Sequelize from "sequelize";
import { DataTypes } from "sequelize";
import db from "../database/db.js";

const ProjectModel = db.define('proyectos', {
    
numProyecto:{type:DataTypes.STRING},  
nomProyecto:{type:DataTypes.STRING},  
prioridad:{type:DataTypes.STRING},  
fecha:{type:DataTypes.DATE},  
cliente:{type:DataTypes.STRING},
descripcion:{type:DataTypes.STRING},  
estatus:{type:DataTypes.STRING},  
cantidad:{type:DataTypes.STRING},  
fRequerida:{type:DataTypes.DATE},  
fFinalizacion:{type:DataTypes.DATE}, 
fEntrega:{type:DataTypes.DATE}, 

})
ProjectModel.removeAttribute('id');
 export default  ProjectModel


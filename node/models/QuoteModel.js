import { DataTypes } from "sequelize";
import db from "../database/db.js";

const QuoteModel = db.define('cotizaciones', {
    
numProyecto:{type:DataTypes.STRING},  
numCotizacion:{type:DataTypes.STRING},
fEntCotizar:{type:DataTypes.DATE}, 
fCotizada:{type:DataTypes.DATE}, 
Encargado:{type:DataTypes.STRING},

})
QuoteModel.removeAttribute('id');

 export default  QuoteModel
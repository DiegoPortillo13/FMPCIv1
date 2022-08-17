import { DataTypes } from "sequelize";
import db from "../database/db.js";

const QuoteModel = db.define('cotizaciones', {
    
numProyecto:{type:DataTypes.STRING},  
numCotizaciones:{type:DataTypes.STRING},
fEntCot:{type:DataTypes.DATE}, 
fCotizada:{type:DataTypes.DATE}, 
Encargado:{type:DataTypes.STRING},

})
QuoteModel.removeAttribute('id');

 export default  QuoteModel
import Express from "express";
import cors from "cors";
import db from "./database/db.js";
import projectRoutes from "./routes/routes.js"
import quotesRoutes from "./routes/QuotesRoutes.js"
import invRoutes from "./routes/InvRoutes.js"

const app = Express()
var whitelist = ["https://localhost:8000"]



app.use(cors())
app.use(Express.json({origin:whitelist}))
app.use('/projects', projectRoutes)
app.use('/quotes', quotesRoutes)
app.use('/inventory', invRoutes)
try {
    await db.authenticate()
    console.log('Se conecto exitosamente ala DB')
} catch (error) {
    console.log(`El error de conexion es: ${error}`)
}


app.listen(8000, () => {
    console.log('El server esta corriendo en  http://localhost:8000')
})
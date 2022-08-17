import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const URI = 'http://localhost:8000/projects/'
const URIC = 'http://localhost:8000/quotes/'



const Add = () => {
    const [numProyecto, setNumProyecto] = useState('')
    const [nomProyecto, setNomProyecto] = useState('')
    const [prioridad, setPrioridad] = useState('')
    const [fecha, setFecha] = useState('')
    const [cliente, setCliente] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [estatus, setEstatus] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [fRequerida, setFrequerida] = useState('')
    const [fFinalizacion, setFfinalizacion] = useState('')
    const [fEntrega, setFentrega] = useState('')
    const [numCotizacion, setNumCotizacion] = useState('')
    const [fEntCotizar, setFentCotizar] = useState('')
    const [fCotizada, setFcotizada] = useState('')
    const [encargado, setEncargado] = useState('')
    const navigate = useNavigate()

    const guardar = async (e) => {
        e.preventDefault()
        await axios.post(URI, {
            numProyecto: numProyecto,
            nomProyecto: nomProyecto,
            prioridad: prioridad,
            fecha: fecha,
            cliente: cliente,
            descripcion: descripcion,
            estatus: estatus,
            cantidad: cantidad,
            fRequerida: fRequerida,
            fFinalizacion: fFinalizacion,
            fEntrega: fEntrega,
            
        })
        await axios.post(URIC, {
            numProyecto: numProyecto,
            numCotizacion: numCotizacion,
            fEntCotizar: fEntCotizar,
            fCotizada: fCotizada,
            encargado: encargado
        })
        navigate('/')
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Agregar Proyecto</h1>
                    <form onSubmit={guardar}>
                        <h2>Datos del Proyecto</h2>
                        <label className="form-label">Numero Identificador del Proyecto</label>
                        <input value={numProyecto} onChange={(e) => setNumProyecto(e.target.value)} type='text' className="frml" />

                        <label className="form-label">Nombre del Proyecto</label>
                        <input value={nomProyecto} onChange={(e) => setNomProyecto(e.target.value)} type='text' className="frml" />

                        <label className="form-label">Prioridad</label>
                        <select value={prioridad} onChange={(e) => setPrioridad(e.target.value)} className="frml">
                            <option>Seleccione Una Opcion</option>
                            <option>Normal</option>
                            <option>Alta</option>
                            <option>Baba</option>
                            <option>Urgente</option>
                        </select>


                        <label className="form-label">Fecha de registro</label>
                        <input value={fecha} onChange={(e) => setFecha(e.target.value)} type='date' className="frml" />

                        <label className="form-label">Cliente</label>
                        <input value={cliente} onChange={(e) => setCliente(e.target.value)} type='text' className="frml" />

                        <label className="form-label">Descripcion</label>
                        <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} type='text' className="frml" />

                        <label className="form-label">Estado</label>
                        <select value={estatus} onChange={(e) => setEstatus(e.target.value)} className="frml">
                            <option>Seleccione Una Opcion</option>
                            <option>Diseño</option>
                            <option>Diseño-Revision</option>
                            <option>En Fila</option>
                            <option>En Proceso</option>
                            <option>Para Entrega Parcial</option>
                            <option>Terminado</option>
                            <option>No Completado</option>
                        </select>

                        <label className="form-label">Cantidad</label>
                        <textarea value={cantidad} onChange={(e) => setCantidad(e.target.value)} type='text' className="frml" />

                        <label className="form-label">Fecha Requerida</label>
                        <input value={fRequerida} onChange={(e) => setFrequerida(e.target.value)} type='date' className="frml" />

                        <label className="form-label">Fecha Finalizacion</label>
                        <input value={fFinalizacion} onChange={(e) => setFfinalizacion(e.target.value)} type='date' className="frml" />

                        <label className="form-label">Fecha Requerida</label>
                        <input value={fEntrega} onChange={(e) => setFentrega(e.target.value)} type='date' className="frml" />

                        <br />
                        <br />
                        <br />

                        <h2>Datos de Cotizacion</h2>
                        <label className="form-label">Numero Identificador de la Cotizacion</label>
                        <input value={numCotizacion} onChange={(e) => setNumCotizacion(e.target.value)} type='text' className="frml" />

                        <label className="form-label">Fecha de Entrega para Cotizar</label>
                        <input value={fEntCotizar} onChange={(e) => setFentCotizar(e.target.value)} type='date' className="frml" />

                        <label className="form-label">Fecha de Cotizacion Finalizada</label>
                        <input value={fCotizada} onChange={(e) => setFcotizada(e.target.value)} type='date' className="frml" />

                        <label className="form-label">Encargado</label>
                        <select value={encargado} onChange={(e) => setEncargado(e.target.value)} className="frml">
                            <option>Seleccione Una Opcion</option>
                            <option>Alfonso Santa Anna</option>
                            <option>Mauro Saenz</option>
                            <option>Claudia Gaytan</option>
                        </select>
                        <br />
                        <br />
                        <button type="submit" className="btn-o mt-2 mb-2">Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add
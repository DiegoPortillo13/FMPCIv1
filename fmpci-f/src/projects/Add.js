import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as BsIcon from "react-icons/bs";



const URI = 'http://localhost:8000/projects/'
const URIC = 'http://localhost:8000/quotes/'



const Add = () => {
    const vaIni = {
        numProyecto: '',
        nomProyecto: '',
        prioridad: '',
        fecha: '',
        cliente: '',
        descripcion: '',
        estatus: '',
        cantidad: '',
        fRequerida: '',
        fFinalizacion: '',
        fEntrega: '',
    }
    const vaIniC = {
        numCotizaciones: '',
        fEntCot: '',
        fCotizada: '',
        encargado: '',
    }
    const [proyecto, setProyecto] = useState(vaIni)
    const [contizacion, setCotizacion] = useState(vaIniC)

    const capturarDatos = (e) => {

        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })

    }
    const capturarDatosC = (e) => {
        setCotizacion({
            ...contizacion,
            [e.target.name]: e.target.value
        })
    }
    const navigate = useNavigate()

    const guardar = async (e) => {
        e.preventDefault()
        await axios.post(URI, {
            numProyecto: proyecto.numProyecto,
            nomProyecto: proyecto.nomProyecto,
            prioridad: proyecto.prioridad,
            fecha: proyecto.fecha,
            cliente: proyecto.cliente,
            descripcion: proyecto.descripcion,
            estatus: proyecto.estatus,
            cantidad: proyecto.cantidad,
            fRequerida: proyecto.fRequerida,
            fFinalizacion: proyecto.fFinalizacion,
            fEntrega: proyecto.fEntrega

        })
        await axios.post(URIC, {

            numCotizaciones: contizacion.numCotizaciones,
            fEntCot: contizacion.fEntCot,
            fCotizada: contizacion.fCotizada,
            encargado: contizacion.encargado,
            numProyecto: proyecto.numProyecto,
        })
        navigate('/')
        console.log(proyecto);
        console.log(contizacion.encargado);
    }


    return (
        <div className="container">
            <div className="row">
                <div className='col-1'>
                    <button className="btn-o mt-2 mb-2" ><BsIcon.BsArrowBarLeft /></button>
                </div>
                <div className="col">
                    <h1>Agregar Proyecto</h1>
                    <form onSubmit={guardar}>
                        <h2>Datos del Proyecto</h2>
                        <label className="form-label">Numero Identificador del Proyecto</label>
                        <input name='numProyecto'
                            value={proyecto.numProyecto}
                            onChange={capturarDatos}
                            type='text'
                            className="frml" />

                        <label className="form-label">Nombre del Proyecto</label>
                        <input name='nomProyecto'
                            value={proyecto.nomProyecto}
                            onChange={capturarDatos}
                            type='text'
                            className="frml" />

                        <label className="form-label">Prioridad</label>
                        <select name='prioridad'
                            value={proyecto.prioridad}
                            onChange={capturarDatos}
                            className="frml">
                            <option>Seleccione Una Opcion</option>
                            <option>Normal</option>
                            <option>Alta</option>
                            <option>Baja</option>
                            <option>Urgente</option>
                        </select>


                        <label className="form-label">Fecha de registro</label>
                        <input name='fecha'
                            value={proyecto.fecha}
                            onChange={capturarDatos}
                            type='date' className="frml" />

                        <label className="form-label">Cliente</label>
                        <input name='cliente'
                            value={proyecto.cliente}
                            onChange={capturarDatos}
                            type='text'
                            className="frml" />

                        <label className="form-label">Descripcion</label>
                        <textarea name='descripcion'
                            value={proyecto.descripcion}
                            onChange={capturarDatos}
                            type='text'
                            className="frml" />

                        <label className="form-label">Estado</label>
                        <select name='estatus'
                            value={proyecto.estatus}
                            onChange={capturarDatos}
                            className="frml">
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
                        <textarea name='cantidad'
                            value={proyecto.cantidad}
                            onChange={capturarDatos}
                            type='text'
                            className="frml" />

                        <label className="form-label">Fecha Requerida</label>
                        <input name='fRequerida'
                            value={proyecto.fRequerida}
                            onChange={capturarDatos}
                            type='date'
                            className="frml" />

                        <label className="form-label">Fecha Finalizacion</label>
                        <input name='fFinalizacion'
                            value={proyecto.fFinalizacion}
                            onChange={capturarDatos}
                            type='date'
                            className="frml" />

                        <label className="form-label">Fecha Requerida</label>
                        <input name='fEntrega'
                            value={proyecto.fEntrega}
                            onChange={capturarDatos}
                            type='date'
                            className="frml" />
                        <br />
                        <br />
                        <br />
                        <h2>Datos de Cotizacion</h2>
                        <label className="form-label">Numero Identificador de la Cotizacion</label>
                        <input name="numCotizaciones"
                            value={contizacion.numCotizaciones}
                            onChange={capturarDatosC}
                            type='text'
                            className="frml" />

                        <label className="form-label">Fecha de Entrega para Cotizar</label>
                        <input name="fEntCot"
                            value={contizacion.fEntCot}
                            onChange={capturarDatosC}
                            type='date'
                            className="frml" />

                        <label className="form-label">Fecha de Cotizacion Finalizada</label>
                        <input name="fCotizada"
                            value={contizacion.fCotizada}
                            onChange={capturarDatosC}
                            type='date'
                            className="frml" />

                        <label className="form-label">Encargado</label>
                        <select name='encargado'
                            value={contizacion.encargado}
                            onChange={capturarDatosC}
                            className="frml">
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
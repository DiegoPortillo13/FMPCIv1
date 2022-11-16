import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as BsIcon from "react-icons/bs";


const URI = 'http://localhost:8000/quotes/'

const EditC = () => {
     
    const [proyecto, setProyecto] = useState({
        numProyecto: "",
        nomProyecto: "",
        prioridad: "",
        fecha: "",
        cliente: "",
        descripcion: "",
        estatus: "",
        cantidad: "",
        fRequerida: "",
        fFinalizacion: "",
        fEntrega: "",
    })
    const capturarDatos = (e) => {

        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }
    const navigate = useNavigate()
    const  {id}  = useParams()

    const getProById = async () => {
        const res = await axios.get(URI+id)
        setProyecto(res.data)
    }
    useEffect(() => {
        getProById(id)
        console.log(proyecto);
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const update = async (e) => {
        e.preventDefault()
        console.log(URI + id);
        await axios.put(URI + id, {
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
        console.log(proyecto);
        navigate('/')
    }

    


    return (
        <div>
            <div className="container">

                <div className="row">
                    <div className='col-1'>
                        <Link to={`/projects/`} className="btn-o mt-2 mb-2" ><BsIcon.BsArrowBarLeft/></Link>
                    </div>
                    <div className="col">
                        <h1>Actualizar Proyecto</h1>
                        <form onSubmit={update}>
                            <h2>Datos del Proyecto</h2>
                            <label className="form-label">Numero Identificador del Proyecto</label>
                            <input name='numProyecto'
                                value={proyecto.numProyecto ?? ""}
                                onChange={capturarDatos}
                                type='text'
                                className="frml" />

                            <label className="form-label">Nombre del Proyecto</label>
                            <input name='nomProyecto'
                                value={proyecto.nomProyecto ?? ""}
                                onChange={capturarDatos}
                                type='text'
                                className="frml" />

                            <label className="form-label">Prioridad</label>
                            <select name='prioridad'
                                value={proyecto.prioridad ?? ""}
                                onChange={capturarDatos}
                                className="frml">
                                <option>Seleccione Una Opcion</option>
                                <option>Normal</option>
                                <option>Alta</option>
                                <option>Baba</option>
                                <option>Urgente</option>
                            </select>


                            <label className="form-label">Fecha de registro</label>
                            <input name='fecha'
                                value={proyecto.fecha ?? ""}
                                onChange={capturarDatos}
                                type='date' className="frml" />

                            <label className="form-label">Cliente</label>
                            <input name='cliente'
                                value={proyecto.cliente ?? ""}
                                onChange={capturarDatos}
                                type='text'
                                className="frml" />

                            <label className="form-label">Descripcion</label>
                            <textarea name='descripcion'
                                value={proyecto.descripcion ?? ""}
                                onChange={capturarDatos}
                                type='text'
                                className="frml" />

                            <label className="form-label">Estado</label>
                            <select name='estatus'
                                value={proyecto.estatus ?? ""}
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
                                value={proyecto.cantidad ?? ""}
                                onChange={capturarDatos}
                                type='text'
                                className="frml" />

                            <label className="form-label">Fecha Requerida</label>
                            <input name='fRequerida'
                                value={proyecto.fRequerida ?? ""}
                                onChange={capturarDatos}
                                type='date'
                                className="frml" />

                            <label className="form-label">Fecha Finalizacion</label>
                            <input name='fFinalizacion'
                                value={proyecto.fFinalizacion ?? ""}
                                onChange={capturarDatos}
                                type='date'
                                className="frml" />

                            <label className="form-label">Fecha Requerida</label>
                            <input name='fEntrega'
                                value={proyecto.fEntrega ?? ""}
                                onChange={capturarDatos}
                                type='date'
                                className="frml" />
                            <br />
                            <br />
                            <button type="submit" className="btn-o mt-2 mb-2" >Actualizar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditC
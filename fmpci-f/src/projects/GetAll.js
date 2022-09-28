import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as BsIcon from "react-icons/bs";
import './Estilo.css'

const URI = 'http://localhost:8000/projects/'

const CompGetAll = () => {
    const [projects, setPojects] = useState([])
    const [modal, setPopUp] = useState({
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


    const getProjects = async () => {
        const res = await axios.get(URI)
        setPojects(res.data)
    }
    const getProjectsId = async (numProyecto) => {
        const res = await axios.get(`${URI}${numProyecto}`)
        setPopUp(res.data)
    }
    useEffect(() => {
        getProjects()
    }, [])
    const delProject = async (numProyecto) => {
        axios.delete(`${URI}${numProyecto}`)
        getProjects()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>
                        Proyectos
                    </h1>
                    <Link to="/add" className='btn-o mt-2 mb-2' ><BsIcon.BsFillPlusCircleFill /> <span className='spn'>Agregar Proyecto</span> </Link>
                    <table className="table table-striped table-inverse table-responsive">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Prioridad</th>
                                <th>Cliente</th>
                                <th>Descripcion</th>
                                <th>Estado</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project) => (
                                <tr key={project.numProyecto} onClick={() => getProjectsId(project.numProyecto)} data-bs-toggle="modal" data-bs-target="#myModal">
                                    <td>{project.numProyecto}</td>
                                    <td>{project.nomProyecto}</td>
                                    <td>{project.prioridad}</td>
                                    <td>{project.cliente}</td>
                                    <td>{project.descripcion}</td>
                                    <td>{project.estatus}</td>
                                    <td>{project.cantidad}</td>
                                    <td>{
                                        <Link to={`/edit/${project.numProyecto}`} className='btn-o  mx-2'><BsIcon.BsFillPencilFill /></Link>

                                    }
                                        <button onClick={() => delProject(project.numProyecto)} className='btn-o mx-2'><BsIcon.BsFillTrashFill /></button>
                                        <button onClick={() => getProjectsId(project.numProyecto)} className='btn-o mx-2' data-bs-toggle="modal" data-bs-target="#myModal"><BsIcon.BsEyeFill /></button>

                                    </td>
                                </tr>
                            ))

                            }
                        </tbody>
                    </table>

                </div>
            </div>


            <div className="modal" id="myModal">
                <div className="modal-dialog" style={{ width: "700px" }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-ti tle">No. Proyecto: {modal.numProyecto}</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <ul key={modal.numProyecto}>
                                <li><b>Nombre:</b> {modal.nomProyecto}<br /></li>
                                <li><b>Prioridad:</b> {modal.prioridad}<br /></li>
                                <li><b>Cliente:</b> {modal.cliente}<br /></li>
                                <li><b>Descripcion:</b> {modal.descripcion}<br /></li>
                                <li><b>Estado:</b> {modal.estatus}<br /></li>
                                <li><b>Cantidad:</b> {modal.cantidad}<br /></li>
                                <li><b>Fecha de Regsitro:</b> {modal.fecha}<br /></li>
                                <li><b>Fecha Requerida:</b> {modal.fRequerida}<br /></li>
                                <li><b>Fecha Finalizada:</b> {modal.fFinalizacion}<br /></li>
                                <li><b>Fecha de Entrega:</b> {modal.fEntrega}<br /></li>
                            </ul>
                        </div>


                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default CompGetAll
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as BsIcon  from "react-icons/bs";
import './Estilo.css' 

const URI = 'http://localhost:8000/projects/'

const CompGetAll = () => {
    const [projects, setPojects] = useState([])
    useEffect(() => {
        getProjects()
    }, [])

    const getProjects = async () => {
        const res = await axios.get(URI)
        setPojects(res.data)
    }


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
                                <tr key={project.numProyecto}>
                                    <td>{project.numProyecto}</td>
                                    <td>{project.nomProyecto}</td>
                                    <td>{project.prioridad }</td>
                                    <td>{project.cliente }</td>
                                    <td>{project.descripcion }</td>
                                    <td>{project.estatus }</td>
                                    <td>{project.cantidad }</td>
                                    <td>{
                                        <Link to={`/edit/${project.numProyecto}`} className='btn-o  mx-2'><BsIcon.BsFillPencilFill /></Link>
                                        
                                        }
                                        <button onClick={()=>delProject(project.numProyecto)} className='btn-o mx-2'><BsIcon.BsFillTrashFill /></button>
                                    </td>
                                </tr>
                            ))

                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default CompGetAll
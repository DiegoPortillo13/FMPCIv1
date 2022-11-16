import axios from "axios";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';


const URI = `http://localhost:8000/projects/`

const InfoW = (props) => {
    const [projects, setPojects] = useState([])
    const getProjects = async () => {
        const res = await axios.get(URI)
        setPojects(res.data)
    }
    useEffect(() => {
        getProjects()
    }, [])// eslint-disable-line react-hooks/exhaustive-deps



    return (
        <div>

            <Modal show={props.show} onHide={props.close} centered>
                {projects.map((project) => (
                    <><Modal.Header closeButton={props.close}>
                        <Modal.Title>{project.numProyecto}</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            <ul key={project.numProyecto}>
                                <li><b>Nombre:</b> {project.nomProyecto}<br /></li>
                                <li><b>Prioridad:</b> {project.prioridad}<br /></li>
                                <li><b>Cliente:</b> {project.cliente}<br /></li>
                                <li><b>Descripcion:</b> {project.descripcion}<br /></li>
                                <li><b>Estado:</b> {project.estatus}<br /></li>
                                <li><b>Cantidad:</b> {project.cantidad}<br /></li>
                                <li><b>Fecha de Regsitro:</b> {project.fecha}<br /></li>
                                <li><b>Fecha Requerida:</b> {project.fRequerida}<br /></li>
                                <li><b>Fecha Finalizada:</b> {project.fFinalizacion}<br /></li>
                                <li><b>Fecha de Entrega:</b> {project.fEntrega}<br /></li>
                            </ul>

                        </Modal.Body>
                    </>
                ))

                }
                <Modal.Footer>
                    <Button className="btn btn-danger" onClick={props.close}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default InfoW
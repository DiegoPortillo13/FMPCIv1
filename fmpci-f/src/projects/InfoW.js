import axios from "axios";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const URI = 'http://localhost:8000/projects/'

const InfoW = () => {
    const [projects, setPojects] = useState([])
    useEffect(() => {
        getProjects()
    }, [])

    const getProjects = async () => {
        const res = await axios.get(URI)
        setPojects(res.data)
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button className="nextButton" onClick={handleShow}>
                Open Modal
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                {projects.map((project) => (
                    <><Modal.Header closeButton>
                        <Modal.Title>{project.numProyecto}</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            {project.nomProyecto}<br />
                            {project.prioridad}<br />
                            {project.cliente}<br />
                            {project.descripcion}<br />
                            {project.estatus}<br />
                            {project.cantidad}<br />
                        </Modal.Body>
                    </>
                ))

                }
                <Modal.Footer>
                    <Button className="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default InfoW
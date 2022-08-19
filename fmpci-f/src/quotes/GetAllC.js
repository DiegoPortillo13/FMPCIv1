import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as BsIcon  from "react-icons/bs";
import './Estilo.css' 

const URI = 'http://localhost:8000/quotes/'

const CompGetAllC = () => {
    const [quotes, setQuotes] = useState([])
    useEffect(() => {
        getQuotes()
    }, [])

    const getQuotes = async () => {
        const res = await axios.get(URI)
        setQuotes(res.data)
       
    }


    const delQuotes = async (numCotizaciones) => {
        axios.delete(`${URI}${numCotizaciones}`)
        getQuotes()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>
                        Cotizaciones
                    </h1>
                    <Link to="/add" className='btn-o mt-2 mb-2' ><BsIcon.BsFillPlusCircleFill /> <span className='spn'>Agregar Cotizacion</span> </Link>
                    <table className="table table-striped table-inverse table-responsive">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Id Proyecto</th>
                                <th>Id Cotizacion</th>
                                <th>Fecha </th>
                                <th>Fecha</th>
                                <th>Encargado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {quotes.map((quote) => (
                                <tr key={quote.numCotizaciones}>
                                    <td>{quote.numProyecto}</td>
                                    <td>{quote.numCotizaciones}</td>
                                    <td>{quote.fEntCot }</td>
                                    <td>{quote.fCotizada }</td>
                                    <td>{quote.encargado }</td>
                                    <td>{
                                        <Link to={`/editar/${quote.numCotizaciones}`} className='btn-o  mx-2'><BsIcon.BsFillPencilFill /></Link>
                                        
                                        }
                                        <button onClick={()=>delQuotes(quote.numCotizaciones)} className='btn-o mx-2'><BsIcon.BsFillTrashFill /></button>
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

export default CompGetAllC
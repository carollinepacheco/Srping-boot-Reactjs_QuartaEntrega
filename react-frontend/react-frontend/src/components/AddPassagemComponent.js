import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import PassagemService from '../services/PassagemService'

const AddPassagemComponent = () => {

    const [destino, setDestino] = useState('')
    const [data, setData] = useState('')
    const [horario, setHorario] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdatePassagem = (e) => {
        e.preventDefault();

        const passagem = { destino, data, horario }

        if (id) {
            PassagemService.updatePassagem(id, passagem).then((response) => {
                navigate('/passagens')

            }).catch(error => {
                console.log(error)
            })
        } else {
            PassagemService.createPassagem(passagem).then((response) => {

                console.log(response.data)

                navigate('/passagens');

            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {

        PassagemService.getPassagemById(id).then((response) => {
            setDestino(response.data.destino)
            setData(response.data.data)
            setHorario(response.data.horario)
        }).catch(error => {
            console.log(error);
        })
    }, [id])

    const title = () => {

        if (id) {
            return <h2 className="text-center">Editar Passagem</h2>
        } else {
            return <h2 className="text-center">Cadastrar Passagem</h2>
        }
    }

    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3 mt-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form >
                                <div className="form-group mb-2">
                                    <label className="form-label"> Destino: </label>
                                    <input className="form-control"
                                        type="text"
                                        name="destino"
                                        value={destino}
                                        onChange={(e) => setDestino(e.target.value)}>
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Data: </label>
                                    <input className="form-control"
                                        type="date"
                                        name="data"
                                        value={data}
                                        onChange={(e) => setData(e.target.value)}>
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Data: </label>
                                    <input className="form-control"
                                        type="time"
                                        name="horario"
                                        value={horario}
                                        onChange={(e) => setHorario(e.target.value)}>
                                    </input>
                                </div>

                                <button className="btn btn-success" onClick={(e) => saveOrUpdatePassagem(e)}> Cadastrar </button>
                                <Link to="/passagens" className="btn btn-danger cancel"> Cancelar </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPassagemComponent
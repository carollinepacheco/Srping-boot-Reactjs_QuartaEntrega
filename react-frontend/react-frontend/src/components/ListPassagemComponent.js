import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PassagemService from '../services/PassagemService'

const ListPassagemComponent = () => {

    const [passagens, setPassagens] = useState([])

    useEffect(() => {

        getAllPassagens();

    }, [])

    const getAllPassagens = () => {
        PassagemService.getAllPassagens().then((response) => {
            setPassagens(response.data)
            console.log(response.data);

        }).catch(error => {
            console.log(error);
        })
    }
    const deletePassagem = (passagemId) => {
        PassagemService.deletePassagem(passagemId).then((response) => {
            getAllPassagens();

        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="container">
            <h2 className="text-center"> Lista de Passagens </h2>
            <Link to="/add-passagem" className="btn btn-primary mb-2"> Cadastrar Passagem </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Passagem Id</th>
                        <th>Destino</th>
                        <th>Data</th>
                        <th>Horário</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        passagens.map(
                            (passagem) =>
                                <tr key={passagem.id}>
                                    <td> {passagem.id} </td>
                                    <td> {passagem.destino} </td>
                                    <td> {passagem.data} </td>
                                    <td> {passagem.horario} </td>
                                    <td>
                                        <Link className="btn btn-secondary" to={`/edit-passagem/${passagem.id}`}>editar</Link>
                                        <button className="btn btn-danger" onClick={() => deletePassagem(passagem.id)}
                                            style={{ marginLeft: "10px" }}>deletar</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListPassagemComponent
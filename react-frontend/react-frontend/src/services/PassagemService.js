import axios from 'axios'

const PASSAGEM_BASE_REST_API_URL = 'http://localhost:8080/api/v1/passagens';

class PassagemService{
    
    getAllPassagens(){
        return axios.get(PASSAGEM_BASE_REST_API_URL)
    }

    createPassagem(passagem){
        return axios.post(PASSAGEM_BASE_REST_API_URL, passagem)
    } 

    getPassagemById(passagemId){
        return axios.get(PASSAGEM_BASE_REST_API_URL + '/' + passagemId);
    }
    updatePassagem(passagemId, passagem) {
        return axios.put(PASSAGEM_BASE_REST_API_URL + '/' + passagemId, passagem);
    }

    deletePassagem(passagemId){
        return axios.delete(PASSAGEM_BASE_REST_API_URL + '/' + passagemId);
    }
}

export default new PassagemService();
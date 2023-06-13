import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/auth';

class UserService {

    async login(email, senha) {
        return axios.post(USERS_REST_API_URL, { email, senha });
    }

    async obterUsuario(email, senha) {
        return axios.get(`${USERS_REST_API_URL}?email=${email}&senha=${senha}`);
    }

    async obterUsuarioPorEmail(email) {
        return axios.get(`${USERS_REST_API_URL}/${email}`)
    }

}

export default new UserService();
import axios from 'axios'

const PROJETOS_REST_API_URL = 'http://localhost:8080/projeto';

class ProjetoService {

    async getProjetos() {
        return axios.get(PROJETOS_REST_API_URL + "/obter");
    }

}

export default new ProjetoService();
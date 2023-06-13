import axios from 'axios'

const PROJETOS_REST_API_URL = 'http://localhost:8080/projeto';

class ProjetoService {

    async getProjetos() {
        return axios.get(PROJETOS_REST_API_URL + "/obter");
    }

    async getProjetoPorAlunoId(alunoId, token) {
        const config = {
            headers: { Authorization: `Bearer ${token}`}
        }
        return axios.get(`${PROJETOS_REST_API_URL}/obter/aluno/${alunoId}`, config);
    }

}

export default new ProjetoService();
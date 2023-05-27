import axios from 'axios'

const PROJETOS_REST_API_URL = 'http://localhost:8080/projeto';

class ProjetoService {

    async getProjetos() {
        const config = {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJqdWVsQGVtYWlsLmNvbSIsInBlcmZpbCI6IkFMVU5PIiwiZXhwIjoxNjg0ODAzOTEzfQ.tNAnnGwF1yW_Ei6tW40B-JNTqK00DDtY9zXFGeEyHcY'
            }
        }
        return axios.get(PROJETOS_REST_API_URL + "/obter", config);
    }

}

export default new ProjetoService();
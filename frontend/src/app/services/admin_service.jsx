import axios from 'axios';
import { env } from '../../environments/env';

const API_URL = env.API_URL

class AdminAPIService {
    static async signInAdmin(data) {
        const response = await axios.post(`${API_URL}/admin/signin`, data)
        return response.data;
    }

  }
  
export default AdminAPIService;

import axios from 'axios';
import { env } from '../../environments/env';

const API_URL = env.API_URL

class UserAPIService {
    static async generateOtp(data) {
        const response = await axios.post(`${API_URL}/user/generateOtp`, data)
        return response.data;
    }

  }
  
export default UserAPIService;

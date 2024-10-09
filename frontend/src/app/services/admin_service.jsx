import axios from 'axios';
import { env } from '../../environments/env';

const API_URL = env.API_URL
const token = localStorage.getItem('admintoken');
const headers = { Authorization: `Bearer ${token}` };

class AdminAPIService {
    static async signInAdmin(data) {
        const response = await axios.post(`${API_URL}/admin/signin`, data)
        return response.data;
    }
    static async AddProduct(data) {
      const response = await axios.post(`${API_URL}/admin/addProduct`, data, { headers })
      return response.data;
    }

    static async deleteProduct(data) {
      const response = await axios.post(`${API_URL}/admin/deleteProduct`, data, { headers })
      return response.data;
    }

    static async getdashboardata(data) {
      const response = await axios.post(`${API_URL}/admin/getDashboardInsights`, data, { headers })
      return response.data;
    }
    

  }
  
export default AdminAPIService;

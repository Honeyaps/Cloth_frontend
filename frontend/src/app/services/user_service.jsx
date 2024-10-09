import axios from 'axios';
import { env } from '../../environments/env';

const API_URL = env.API_URL

class UserAPIService {
    static async generateOtp(data) {
        const response = await axios.post(`${API_URL}/user/generateOtp`, data)
        return response.data;
    }

    static async signUpUser(data) {
      const response = await axios.post(`${API_URL}/user/signup`, data)
      return response.data;
    }

    static async signInUser(data) {
      const response = await axios.post(`${API_URL}/user/signin`, data)
      return response.data;
    }

    static async FPemailVerify(data) {
      const response = await axios.post(`${API_URL}/user/OTPforPass`, data)
      return response.data;
    }

    static async FPverifyOtp(data) {
      const response = await axios.post(`${API_URL}/user/verifyOtp`, data)
      return response.data;
    }

    static async FPpassReset(data) {
      const response = await axios.post(`${API_URL}/user/updatePass`, data)
      return response.data;
    }

    static async getProducts(data) {
      const response = await axios.post(`${API_URL}/user/getProducts`, data)
      return response.data;
    }

  }
  
export default UserAPIService;

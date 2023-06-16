import axios from 'axios';
import { RegistrationData } from './types';

export const authAPI = {
  registration: async (data: RegistrationData) => {
    const res = await axios.post('/api/auth/registration', data);

    return res;
  },
};

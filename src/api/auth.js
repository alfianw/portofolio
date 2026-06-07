import axios from 'axios';
import axiosInstance from './axiosInstance';

const API_BASE = import.meta.env.VITE_API_BASE;
console.log('API_BASE:', import.meta.env.VITE_API_BASE);

export const loginUser = (data) => axios.post(`${API_BASE}/api/login`, data);

export const registerUser = (formData) => axios.post(`${API_BASE}/api/register`, formData, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});
export const detailUser = () => axiosInstance.get('/api/users/userDetail');


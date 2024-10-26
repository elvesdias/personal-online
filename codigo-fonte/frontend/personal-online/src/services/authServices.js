import axios from 'axios';
import { API_URL } from "@env"

export function userRegister(type, name, email, phone, password, confirmPassword) {
    return axios.post(`${API_URL}/users/register`, {
        type: type,
        name: name,
        email: email,
        phone: phone,
        password: password,
        confirmPassword: confirmPassword
    })
}

export async function userlogin(email, password) {
    return await axios.post(`${API_URL}/users/login`, {
        email: email,
        password: password,
    })
}

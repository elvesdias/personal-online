import axios from "axios";
import { API_URL } from '@env';

// Atualizar usuário
export async function userupdate(id, name, email, phone, password, confirmPassword, token) {
    try {
        const response = await axios.patch(`http://192.168.1.10:3333/users/${id}`,  // Corrigido para o endpoint correto de usuário
            {
                name: name,
                email: email,
                phone: phone,
                password: password,
                confirmPassword: confirmPassword
            },
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

// Salvar histórico de exercícios do usuário
export async function userhistory(user_id, exercise_id) {
    const response = await axios.post("http://192.168.1.10:3333/exercises", {
        user_id: user_id,
        exercise_id: exercise_id
    });
    return (response.status === 200);
}

// Obter usuário por ID
export function getUserById(id) {
    return axios.get(`http://192.168.1.10:3333/users/${id}`);  // Corrigido para obter usuário por ID
}

// Obter histórico e programas do usuário
export async function getUserHistory(id, token) {
    try {
        const result = await axios.get(`http://192.168.1.10:3333/users/${id}/historico`, {  // Corrigido para o endpoint correto de histórico
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        const historys = result.data.historicos;

        const user = await axios.get(`http://192.168.1.10:3333/users/${id}`);
        const programs = user.data.user.programs;

        return [historys, programs];
    } catch (err) {
        console.log(err);
        return err;
    }
}
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://100.27.33.200:3333', // Confirme este valor
});

export default api;

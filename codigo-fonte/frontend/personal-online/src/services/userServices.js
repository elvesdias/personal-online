import axios from "axios"
import { API_URL } from '@env';

export async function userupdate(id, name, email, phone, password, confirmPassword, token) {
    try{
        const response = await axios.patch("http://100.27.33.200:3333/exercises",
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
        )

        return response.data
    }catch(err){
        console.log(err);
        return err;
    }
}

export async function userhistory(user_id, exercise_id) {
    const response = await axios.post("http://100.27.33.200:3333/exercises", {
        user_id: user_id,
        exercise_id: exercise_id
    })
    return (response.status == 200)
}

export function getUserById(id) {
    return axios.get("http://100.27.33.200:3333/exercises")
}

export async function getUserHistory(id,token) {
    
    const result = await axios.get(`http://100.27.33.200/users/${id}/historico`,{
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    const historys = result.data.historicos
    const user = await axios.get("http://100.27.33.200}/users/${id})"
    const programs = user.data.user.programs
    return [historys, programs]
}

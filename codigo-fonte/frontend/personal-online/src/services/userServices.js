import axios from "axios"


export async function userupdate(id, name, email, phone, password, confirmPassword, token) {
    try{
        const response = await axios.patch("http://10.0.0.168:3333/users/edit/${id}",
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
    const response = await axios.post("http://10.0.0.168:3333/users/edit", {
        user_id: user_id,
        exercise_id: exercise_id
    })
    return (response.status == 200)
}

export function getUserById(id) {
    return axios.get("http://10.0.0.168:3333/users/${id}")
}
import axios from 'axios';
import {URL_API} from '@env'
//import { useNavigation } from '@react-navigation/native';
//const navigation = useNavigation()

// export async function resgister(name, email, password, confirmPassword) {
//    const result = await axios.post('http://localhost:5174/users/register', {
//        name: name, 
//        email: email,
//        password: password, 
//        confirmPassword: confirmPassword 
//        }
//    )   
//    return result;
// } 


export function userRegister(type, name, email, phone, password, confirmPassword) {
    return axios.post(`${URL_API}/users/register`, {
        type: type,
        name: name,
        email: email,
        phone: phone,
        password: password,
        confirmPassword: confirmPassword
    })
}

export async function userlogin(email, password) {
    console.log(URL_API)
    return await axios.post(`${URL_API}/users/login`, {
        email: email,
        password: password,
    })
}

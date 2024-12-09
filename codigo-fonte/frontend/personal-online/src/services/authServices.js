import axios from 'axios';
import { API_URL } from '@env';
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
    return axios.post("http://192.168.1.4:3333/users/register", {
        type: type,
        name: name,
        email: email,
        phone: phone,
        password: password,
        confirmPassword: confirmPassword
    })
}

// export async function userlogin(email, password) {
//     const result = await axios.post("http://192.168.1.4:3333/users/login", {
//         email: email,
//         password: password,
//     })
//     console.log(result.data)
//     return result
// }

export async function userlogin(email, password) {
    return await axios.post("http://192.168.1.4:3333/users/login", {
        email: email,
        password: password,
    })
}

import { createContext, useState } from "react";

const AuthContext = createContext({
    signed: false,
    setSigned: () => { },
    userId: "",
    setUserId: () => { },
    userType: "aluno",
    setUserType: () => { },
    refresh: "aluno",
    setRefresh: () => { },
    userToken: "", 
    setUserToken: () => { },
})

export const AuthProvider = ({ children }) => {

    const [signed, setSigned] = useState(false)
    const [userId, setUserId] = useState(false)
    const [userType, setUserType] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [userToken, setUserToken] = useState("")

    const authObject = {
        signed: signed,
        setSigned: setSigned,
        userId: userId,
        setUserId: setUserId,
        userType: userType,
        setUserType: setUserType,
        refresh: '',
        setRefresh: setRefresh,
        userToken: userToken, 
        setUserToken: setUserToken,
    }

    return (
        <AuthContext.Provider value={authObject}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
// import { createContext, useState } from "react";

// // Tipagem do contexto
// interface AuthContextType {
//   signed: boolean;
//   setSigned: (value: boolean) => void;
//   userId: string;
//   setUserId: (value: string) => void;
//   userType: string;
//   setUserType: (value: string) => void;
//   refresh: string;
//   setRefresh: (value: string) => void;
//   userToken: string;
//   setUserToken: (value: string) => void;
// }

// const AuthContext = createContext<AuthContextType>({
//   signed: false,
//   setSigned: () => {},
//   userId: "",
//   setUserId: () => {},
//   userType: "aluno",
//   setUserType: () => {},
//   refresh: "aluno", // Corrigido para o valor correto
//   setRefresh: () => {},
//   userToken: "",
//   setUserToken: () => {},
// });

// export const AuthProvider = ({ children }) => {
//   // Ajuste dos valores iniciais
//   const [signed, setSigned] = useState(false);
//   const [userId, setUserId] = useState("");  // Corrigido para string
//   const [userType, setUserType] = useState("aluno");  // Corrigido para string
//   const [refresh, setRefresh] = useState("aluno");  // Corrigido para string
//   const [userToken, setUserToken] = useState("");

//   const authObject = {
//     signed,
//     setSigned,
//     userId,
//     setUserId,
//     userType,
//     setUserType,
//     refresh,
//     setRefresh,
//     userToken,
//     setUserToken,
//   };

//   return (
//     <AuthContext.Provider value={authObject}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;

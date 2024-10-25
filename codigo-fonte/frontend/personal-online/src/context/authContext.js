import { createContext, useState } from "react";

const AuthContext = createContext({
    signed: false,
    setSigned: () => { },
    userId: "",
    setUserId: () => { },
    userType: "aluno",
    setUserType: () => { },
})

export const AuthProvider = ({ children }) => {

    const [signed, setSigned] = useState(false)
    const [userId, setUserId] = useState(false)
    const [userType, setUserType] = useState(false)

    const authObject = {
        signed: signed,
        setSigned: setSigned,
        userId: userId,
        setUserId: setUserId,
        userType: userType,
        setUserType: setUserType
    }

    return (
        <AuthContext.Provider value={authObject}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
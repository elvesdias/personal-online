import { useContext, useEffect, useState } from "react";
import AuthContext from "src/context/authContext";
import { TouchableOpacity } from "react-native";
import { Heading, HStack, VStack, Text, Icon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

import { UserPhoto } from "./UserPhoto";

import { getUserById } from "@services/userServices";

export function HomeHeader() {
    const { signed, userId, setSigned } = useContext(AuthContext)

    const [userData, setUserData] = useState({})

    useEffect(() => {
        getUserById(userId).then(res => {
            setUserData(res.data.user);
        }).catch(err => {
            console.log(err);
        })
    }, [userId])
    

    return (
        <HStack backgroundColor="blueGray.800" pt={16} pb={5} px={8} alignItems="center" >
            <UserPhoto
                source={{ uri: 'https://github.com/elvesdias.png' }}
                alt="Imagem do usuário"
                size={16}
                mr={4}
            />
            <VStack flex={1} >
                <Text color="gray.200" fontSize="md" >
                    Olá,
                </Text>

                <Heading color="gray.500" fontSize="md" fontFamily="heading">
                    {userData && userData.name}
                 
                </Heading>
              
            </VStack>

            <TouchableOpacity onPress={() => setSigned(false)}>
                < Icon
                    as={MaterialIcons}
                    name="logout"
                    color="gray.200"
                    size={7}
                />
            </TouchableOpacity>
        </HStack>
    )
}
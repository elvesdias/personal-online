import { useContext, useState } from 'react';
import { userlogin } from '../services/authServices';
import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading, ScrollView, Box } from "native-base";

import AuthContext from '../context/authContext'; // Corrigi o caminho do AuthContext

import Logo from "@assets/logo.png";
import BackgroundImg from "@assets/background.png";
import { URL_API } from '@env';

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
    const { signed, setSigned, setUserId, setUserType, setUserToken} = useContext(AuthContext);
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [aviso, setAviso] = useState('');

    function handleNewAccount() {
        navigation.navigate("signUp");
    }

    async function handleLogin(email: String, password: String) {
        try {
            const res = await userlogin(email, password);
            setUserType(res.data.usertype);
            setUserToken(res.data.token);
            setUserId(res.data.userId);
            setSigned(true);
        } catch (err) {
            const errorMessage = err?.response?.data?.message || 'Erro ao fazer login';
            setAviso(errorMessage);
            console.log(err, "Erro ao fazer login");
        }
    }

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            {/* Imagem de fundo */}
            <Image
                source={BackgroundImg}
                defaultSource={BackgroundImg}
                alt="Aparece na tela uma sala de treinamento de boxe com alguns sacos de boxe"
                resizeMode="cover"  // Use cover para preencher a tela
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                }}
            />

            {/* Conteúdo da tela */}
            <VStack flex={1} px={10} pb={1} zIndex={1}>
                <Center my={20} mt={20}>
                    <Text color="gray.100" fontSize="sm">
                        {/* Sua motivação diária */}
                    </Text>
                </Center>

                <Center>
                    <Heading color="gray.100"  mt={20} fontSize="xl" mb={10} fontFamily="heading">
                        Acesse sua conta
                    </Heading>

                    {aviso ? <Text style={{ color: "#FFF" }}>{aviso}</Text> : null}

                    <Input
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Input
                        placeholder="Senha"
                        secureTextEntry
                        keyboardType="numbers-and-punctuation"
                        value={password}
                        onChangeText={setPassword}
                    />

                    {/* Botão Acessar */}
                    <Box width="100%" mt={4}>
                        <Button title="Acessar" onPress={() => handleLogin(email, password)} />
                    </Box>
                </Center>

                <Center mt={4}>
                    <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
                        Ainda não tem acesso?
                    </Text>

                    {/* Botão Criar conta */}
                    <Box width="100%">
                        <Button
                            title="Criar conta"
                            variant="outline"
                            onPress={handleNewAccount}
                        />
                    </Box>
                </Center>
            </VStack>
        </ScrollView>
    );
}

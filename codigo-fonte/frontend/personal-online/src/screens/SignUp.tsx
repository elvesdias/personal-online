
import React, { useState } from "react";
import { userRegister } from "../services/authServices";
import { useNavigation } from "@react-navigation/native";
import {
  VStack,
  Image,
  Text,
  Center,
  Heading,
  ScrollView,
  NativeBaseProvider,
} from "native-base";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// import Logo from "@assets/logo.png";
import BackgroundImg from "@assets/background2.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

// Definição do schema de validação
const signUpSchema = yup.object({
  name: yup.string().required("Informe o nome."),
  email: yup.string().required("Informe o e-mail.").email("E-mail inválido."),
  phone: yup.string().required("Informe o contato."),
  password: yup
    .string()
    .required("Informe a senha.")
    .min(6, "A senha deve ter pelo menos 6 dígitos."),
  password_confirm: yup
    .string()
    .required("Confirme a senha.")
    .oneOf([yup.ref("password")], "A confirmação da senha não confere."),
});

// Definição do tipo dos dados do formulário
type FormDataProps = {
  name: string;
  email: string;
  phone: string;
  password: string;
  password_confirm: string;
};

export function SignUp() {
  // Uso do hook useState para controlar mensagens de erro
  const [errorMessage, setErrorMessage] = useState('');

  // Uso do hook useForm com validação Yup
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const navigation = useNavigation();

  // Função para navegar para a tela de login
  function handleGoBack() {
    navigation.goBack();
  }

  // Função de cadastro
  function handleSignUp({
    name,
    email,
    phone,
    password,
    password_confirm,
  }: FormDataProps) {
    userRegister(name, email, phone, password, password_confirm)
      .then((res) => {
        navigation.navigate("signIn");
      })
      .catch((err) => {
        const errorResponse = err.response?.data?.message || "Erro ao fazer cadastro";
        setErrorMessage(errorResponse);  // Armazenando a mensagem de erro para exibição
      });
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={BackgroundImg}
        w={1000}
        defaultSource={BackgroundImg}
        alt="Aparece na tela uma sala de treinamento de boxe com alguns sacos de boxe"
        resizeMode="contain"
        position={"absolute"}
      />
      <VStack flex={1} px={6}>
        <Center my={36}>
          {/* <Image source={Logo} alt="GymGo" /> */}
          {/* <Text color="gray.100" fontSize="sm"> */}
          {/* Sua motivação diária */}
          {/* </Text> */}
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={40} fontFamily="heading">
            {/* Crie sua conta */}
          </Heading>

          {/* Exibição da mensagem de erro */}
          {errorMessage ? (
            <Text color="red.500" mb={4}>
              {errorMessage}
            </Text>
          ) : null}

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Contato"
                keyboardType="phone-pad"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.phone?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password_confirm"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Confirmar a senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="send"
                errorMessage={errors.password_confirm?.message}
              />
            )}
          />

          <Center>
            <Button
              title="Criar e acessar"
              mt={8}
              onPress={handleSubmit(handleSignUp)}
              w={320}
              h={14}
            />
          </Center>
        </Center>

        <Button
          title="Voltar para o login"
          variant="outline"
          mt={15}
          alignSelf="center" 
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
}

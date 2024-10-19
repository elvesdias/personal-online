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
// import BackgroundImg from "@assets/background.png";
import BackgroundImg from "@assets/background2.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

type FormDataProps = {
  name: string;
  email: string;
  phone: string;
  password: string;
  password_confirm: string;
};

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

export function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

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
        console.log(err.response.data.message);
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
          <Text style></Text>
          <Heading color="gray.100" fontSize="xl" mb={4} fontFamily="heading">
            {/* Crie sua conta */}
          </Heading>

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
            {" "}
            <Button
              title="Criar e acessar"
              mt={0}
              onPress={handleSubmit(handleSignUp)}
              w={290}
              h={14}
            />
          </Center>
        </Center>

        <Button
          title="Voltar para o login"
          variant="outline"
          mt={2}
          left={5}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
}

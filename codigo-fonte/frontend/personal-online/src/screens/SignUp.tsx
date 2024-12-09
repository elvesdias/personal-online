import { useContext, useState } from "react";
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
  Box
} from "native-base";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthContext from "../context/authContext";
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
  const { setUserId, setSigned, setUserType } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  async function handleSignUp({
    name,
    email,
    phone,
    password,
    password_confirm,
  }: FormDataProps) {
    setLoading(true);
    await userRegister("admin", name, email, phone, password, password_confirm)
      .then((res) => {
        setUserType(res.data.usertype);
        setUserId(res.data.userId);
        setSigned(true);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Imagem de fundo responsiva */}
      <Image
        source={BackgroundImg}
        alt="Aparece na tela uma sala de treinamento de boxe com alguns sacos de boxe"
        resizeMode="cover" // A imagem ocupa toda a tela sem distorcer
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        width="100%" // Largura 100% para a imagem
        height="100%" // Altura 100% para a imagem
      />

      {/* Centralização dos campos e botões */}
      <VStack flex={1} px={8} justifyContent="center" alignItems="center" pb={2}>
        <Center width="100%" maxWidth={500} left={-1}>
          {/* Título "Crie sua conta" movido para baixo */}
          <Heading
            color="gray.100"
            fontSize="xl"
            mb={120}
            fontFamily="heading"
            textAlign="center"
            mt={10} // Adicionando uma margem superior maior para mover o título para baixo
          >
            Crie sua conta
          </Heading>

          {/* Campos de input com margem para baixo */}
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
                w="100%" // Largura 100% para o input
                h={14} // Altura ajustada
                mb={0} // Adicionando margem inferior para dar mais espaço entre os campos
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
                w="100%" // Largura 100% para o input
                h={14} // Altura ajustada
                mb={0} // Adicionando margem inferior para dar mais espaço entre os campos
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
                w="100%" // Largura 100% para o input
                h={14} // Altura ajustada
                mb={0} // Adicionando margem inferior para dar mais espaço entre os campos
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
                w="100%" // Largura 100% para o input
                h={14} // Altura ajustada
                mb={0} // Adicionando margem inferior para dar mais espaço entre os campos
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
                w="100%" // Largura 100% para o input
                h={14} // Altura ajustada
                mb={2} // Adicionando margem inferior para dar mais espaço entre os campos
              />
            )}
          />

          <Center width="100%" maxWidth={500}>
            {/* Botão Criar conta */}
            <Box width="100%" mt={2}>
              <Button
                title="Criar e acessar"
                isLoading={loading}
                onPress={handleSubmit(handleSignUp)}
                w="100%" // Largura 100% para o botão
                h={13} // Altura ajustada
              />
            </Box>

            {/* Botão Voltar para o login */}
            <Box width="100%" mt={2}>
              <Button
                title="Voltar para o login"
                variant="outline"
                onPress={() => navigation.goBack()}
                w="100%" // Largura 100% para o botão
                h={13} // Altura ajustada
              />
            </Box>
          </Center>
        </Center>
      </VStack>
    </ScrollView>
  );
}
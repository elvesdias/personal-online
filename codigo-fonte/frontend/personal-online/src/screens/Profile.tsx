import { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  Center,
  ScrollView,
  VStack,
  Skeleton,
  Text,
  Heading,
} from "native-base";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Formik } from "formik";
import * as Yup from "yup";

const PHOTO_SIZE = 33;

const validationSchema = Yup.object().shape({
  nome: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  telefone: Yup.string().matches(
    /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
    'Número de telefone inválido'
  ).required('Telefone é obrigatório'),
  senhaAntiga: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
  novaSenha: Yup.string().min(6, 'A nova senha deve ter pelo menos 6 caracteres'),
  confirmeNovaSenha: Yup.string()
    .oneOf([Yup.ref('novaSenha'), ''], 'As senhas não coincidem')
    .min(6, 'A confirmação da senha deve ter pelo menos 6 caracteres'),
});

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  return (
    <Formik
    initialValues={{ name: '', email: '', phone: '', old_password: '', new_password: '' }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
        console.log(values);
        // userRegister("aluno", values.name, values.email, values.phone, values.password, values.password_confirm)
        //     .then((res) => {
        //         console.log("Deu certo")
        //     })
        //     .catch((err) => {
        //         console.log("Deu ruim");
        //     });
    }}
>
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <VStack flex={1} bg="#121214">
          <ScreenHeader title="Perfil" />
          <ScrollView>
            <Center mt={6} px={6}>
              {photoIsLoading ? (
                <Skeleton
                  w={PHOTO_SIZE}
                  h={PHOTO_SIZE}
                  rounded="full"
                  startColor="gray.500"
                  endColor="gray.400"
                />
              ) : (
                <UserPhoto
                  source={{ uri: "https://github.com/rafabelisario.png" }}
                  alt="Foto do usuário"
                  size={PHOTO_SIZE}
                />
              )}
              <TouchableOpacity>
                <Text
                  color="blue.500"
                  fontWeight="bold"
                  fontSize="md"
                  mt={3}
                  mb={8}
                >
                  Alterar Foto
                </Text>
              </TouchableOpacity>

              <Input
                bg="gray.600"
                placeholder="Nome"
                onChangeText={handleChange('nome')}
                onBlur={handleBlur('nome')}
                value={values.name}
                isInvalid={!!(errors.name && touched.name)}
              />
              {errors.name && touched.name && <Text color="red.500">{errors.name}</Text>}

              <Input
                bg="gray.600"
                placeholder="E-mail"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                isInvalid={!!(errors.email && touched.email)}
                isDisabled
              />
              {errors.email && touched.email && <Text color="red.500">{errors.email}</Text>}

              <Input
                bg="gray.600"
                placeholder="(99) 99999-9999"
                onChangeText={handleChange('telefone')}
                onBlur={handleBlur('telefone')}
                value={values.phone}
                isInvalid={!!(errors.phone && touched.phone)}
              />
              {errors.phone && touched.phone && <Text color="red.500">{errors.phone}</Text>}
            </Center>

            <VStack px={6} mt={12} mb={9} >
              <Heading color="gray.200" fontSize="md" fontFamily="heading" mb={2} pl={4}>
                Alterar senha
              </Heading>

              <Input
                bg="gray.600"
                placeholder="Senha antiga"
                secureTextEntry
                onChangeText={handleChange('senhaAntiga')}
                onBlur={handleBlur('senhaAntiga')}
                value={values.old_password}
                isInvalid={!!(errors.old_password && touched.old_password)}
              />
              {errors.old_password && touched.old_password && <Text color="red.500">{errors.old_password}</Text>}

              <Input
                bg="gray.600"
                placeholder="Nova senha"
                secureTextEntry
                onChangeText={handleChange('novaSenha')}
                onBlur={handleBlur('novaSenha')}
                value={values.new_password}
                isInvalid={!!(errors.new_password && touched.new_password)}
              />
              {errors.new_password && touched.new_password && <Text color="red.500">{errors.new_password}</Text>}

              <Center><Button title="Atualizar" mt={4} onPress={() => handleSubmit()} /></Center>
            </VStack>
          </ScrollView>
        </VStack>
      )}
    </Formik>
  );
}

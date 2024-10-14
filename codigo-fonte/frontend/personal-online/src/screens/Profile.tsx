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
 
const PHOTO_SIZE = 33;
 
export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
 
  return (
    <VStack flex={1}>
    <ScreenHeader title="Perfil" />
    <ScrollView>
    <Center mt={6} px={10}>
          {photoIsLoading ? (
    <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="blueGray.500"
              endColor="blueGray.400"
            />
          ) : (
        <UserPhoto
              source={{ uri: 'https://github.com/elvesdias.png' }}
              alt="Foto do usuário"
              size={PHOTO_SIZE}
            />
          )}
        <TouchableOpacity>
        <Text
              color="white"
              fontWeight="bold"
              fontSize="md"
              mt={3}
              mb={8}
        >
              Alterar Foto
    </Text>
    </TouchableOpacity>
 
          <Input bg="gray.600" placeholder="Elves Dias" />
 
          <Input bg="gray.600" placeholder="elvesdias@teste.com" isDisabled />

          <Input bg="gray.600" placeholder="(31) 99999-9999" isDisabled />
    </Center>
 
        <VStack px={10} mt={12} mb={9}>
        <Heading color="gray.200" fontSize="md" fontFamily="heading" mb={2} >
            Alterar senha
        </Heading>
 
          <Input bg="gray.600" placeholder="Senha antiga" secureTextEntry />
 
          <Input bg="gray.600" placeholder="Nova senha" secureTextEntry />
 
          <Input
            bg="gray.600"
            placeholder="Confirme a nova senha"
            secureTextEntry
          />
 
          <Button title="Atualizar" mt={4} />
</VStack>
</ScrollView>
</VStack>
  );
}
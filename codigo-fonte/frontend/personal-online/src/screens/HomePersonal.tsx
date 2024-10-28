import { useEffect, useState } from "react";
import {
  HStack,
  VStack,
  FlatList,
  Heading,
  Text,
  useNativeBase,
  Center,
  Box,
  Input,
  Icon,
} from "native-base";
import axios from "axios";
import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";
import { ExerciseCard } from "@components/ExerciseCard";
import { HomeCard } from "@components/HomeCard";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { ButtonApp } from "@components/ButtonApp";
import { Entypo, Ionicons, FontAwesome } from "@expo/vector-icons";

import { alunosJson } from "./../services/testDatasAlunos.json" // dados estáticos para testes


export function HomePersonal() {
  const [users, setUsers] = useState(alunosJson);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenAlunoDetails(programs: any) {
    navigation.navigate('homeAluno', programs);
  }
  useEffect(() => {
    async function getAlunos() {
      const response = await axios.get("http://10.0.0.168:3333/users");
      setUsers(response.data);
      // console.log(response.data)
    }
    getAlunos();
  }, []);
  return (
    <VStack flex={1}>
      <HomeHeader />

      <VStack flex={1} px={8}>
        <Box px={4} mt={4} mb={4}>
          <Input
            placeholder="Pesquisar Aluno"
            bg="#ffffff"
            borderWidth={0}
            borderRadius="sm"
            color="white"
            _focus={{ bg: "gray.600" }}
            InputRightElement={
              <Icon
                as={FontAwesome}
                name="search"
                size={5}
                mr={3}
                color="#29292e"
              />
            }
          />
        </Box>

        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md" fontFamily="heading">
            Alunos
          </Heading>

          <Text color="gray.200" fontSize="sm">
            {users.length}
          </Text>
        </HStack>

        <FlatList
          data={users}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <HomeCard
              cardName={item.name}
              data={item}
              onPress={() => handleOpenAlunoDetails(item.programs)}
              padding={2}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />

        <Center>
          <ButtonApp
            marginBottom={4}
            title="Cadastrar Aluno"
            bg="#ffffff"
            _text={{ color: "#121214" }}
            mt={4}
            onPress={() => handleSubmit()} /*Ir pra tela de cadastro de alunos*/
          />
        </Center>
      </VStack>
    </VStack>
  );
}

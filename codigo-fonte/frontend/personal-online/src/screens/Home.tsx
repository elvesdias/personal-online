import { useEffect, useState, useContext } from "react";
import { HStack, VStack, FlatList, Heading, Text } from "native-base";
import axios from "axios";
import { HomeHeader } from "@components/HomeHeader";
import { HomeCard } from "@components/HomeCard";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useRoute } from "@react-navigation/native";
import AuthContext from "src/context/authContext";

export function Home() {
  const route = useRoute();
  const { userId } = useContext(AuthContext); // obtém o userId do contexto de autenticação
  console.log(userId);
  const [programs, setPrograms] = useState([]); // inicializa com um array vazio
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenProgram(item) {
    navigation.navigate("program", {
      name: item.name,
      day: item.day,
      workouts: item.workouts,
    });
  }

  useEffect(() => {
    async function getProgram() {
      try {
        const response = await axios.get(`http://10.0.0.168:3333/users/${userId}`);
        console.log("Dados da resposta da API:", response.data); 
  
       
        const userPrograms = response.data.user?.programs || []; 
        setPrograms(userPrograms);
      } catch (error) {
        console.error("Erro ao buscar programas:", error);
      }
    }
  
    getProgram();
  }, [userId]);

  return (
    <VStack flex={1} bg="gray.900">
      <HomeHeader />
      <VStack flex={1} px={4}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md" fontFamily="heading">
            Programas
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {programs.length} Programas
          </Text>
        </HStack>

        <FlatList
          data={programs}
          keyExtractor={(item) => item._id} // garante uma chave única para cada programa
          renderItem={({ item }) => (
            <HomeCard
              onPress={() => handleOpenProgram(item)}
              cardName={item.name}
              cardSub={item.workouts.length}
              sufix={item.workouts.length === 1 ? "Treino" : "Treinos"}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
}

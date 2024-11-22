import { useEffect, useState, useContext } from "react"; 
import { HStack, VStack, FlatList, Heading, Text, Center } from "native-base";
import { Button } from "@components/Button";
import axios from "axios";
import { HomeHeader } from "@components/HomeHeader";
import { HomeCard } from "@components/HomeCard";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useRoute } from "@react-navigation/native";
import AuthContext from "src/context/authContext";
// import {URL_API} from '@env'
let URL_API = "http://localhost:3333"

export function Home() {
  const route = useRoute();
  const idUserFromRoute = route.params as any; // acessa os parâmetros passados pelo homePersonal (se existir)

  const { userId, userType } = useContext(AuthContext); // obtém o userId do contexto de autenticação
  const [programs, setPrograms] = useState([]); // inicializa com um array vazio
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const currentUserId = idUserFromRoute || userId;

  async function handleCreateProgram() {
    try {
      const response = await axios.post(`${URL_API}/programs/register`, {
        name: '',
      });
      console.log("Programa criado:", response.data);
      // Atualize a lista de programas ou notifique o usuário
    } catch (error) {
      console.error("Erro ao criar o programa:", error);
    }
  }

  function handleOpenProgram(item) {
    navigation.navigate("program", {
      name: item.name,
      workoutsRoute: item.workouts,
    });
  }

  useEffect(() => {
    async function getProgram() {
      console.log("GetProgram()");
      try {
        const response = await axios.get(`${URL_API}/users/${currentUserId}`);
        const programs = response.data.user?.programs || []; 
        setPrograms(programs);
      } catch (error) {
        console.error("Erro ao buscar programas:", error);
      }
    }
  
    getProgram();
  }, [currentUserId]);

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
          keyExtractor={(item) => item._id || String(Math.random())}
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
        {userType === "admin" && (
          <Center>
            <Button 
              title="Cadastrar programa" 
              bgColor="white" 
              textcolor="black" 
              onPress={handleCreateProgram} 
            />
          </Center>
        )}
      </VStack>
    </VStack>
  );
}

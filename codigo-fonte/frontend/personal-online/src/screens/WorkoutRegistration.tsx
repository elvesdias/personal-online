import { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { VStack, HStack, Text, Icon, ScrollView, Input, Box, FlatList, Center, Heading } from "native-base";
import { Feather } from "@expo/vector-icons";
import { HomeCard } from "@components/HomeCard";
import { useRoute } from '@react-navigation/native';
import axios from "axios";

import { ScreenHeader } from "@components/ScreenHeader";
import { Button } from "@components/Button";

import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { color } from "native-base/lib/typescript/theme/styled-system";
import { getExercicies } from "@services/ExercisesServices";
import { URL_API } from '@env'


export function WorkoutRegistration() {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const [exercises_filtered, setExercisesFiltered] = useState();

  const filtering = (string: String) => {
    setSearch(string)
    let array_clone = [...exercises];

    if(array_clone.length){
      let res = array_clone.filter( item => item.name.toLowerCase().includes(string.toLowerCase()))
      setExercisesFiltered(res)
    }
  }

  useEffect(() => {
      const getExercises = async () => {
        try {
          console.log('useeffect workoutregistration')
          const response = await axios.get(`${URL_API}/exercises`);
          let exercises = response.data || []; 

          setExercises(exercises)
          setExercisesFiltered(exercises)

        } catch (error) {
          console.error("Erro ao buscar programas:", error);
        }
      }
      getExercises();
  }, [])

  return (
    <VStack flex={1} bg="#121214">
      <ScreenHeader title="TREINO A" />
      
      <HStack p={4} pt={6} alignItems="center">
        <Input
          style={{color: 'white'}}
          flex={1}
          bg="#202024"
          placeholder="Pesquisar Exercício"
          placeholderTextColor="gray.100"
          onChangeText={filtering}
          value={search}
          _focus={{ borderColor: "gray.500", bg: "gray.600" }}
        />
        <TouchableOpacity>
          <Icon as={Feather} name="search" size="md" color="gray.100" ml={2} />
        </TouchableOpacity>
      </HStack>

      <HStack justifyContent="space-between" mb={1} mt={6} m={7}>
          <Heading color="gray.200" fontSize="md" fontFamily="heading">
              {name}
          </Heading>
      </HStack>

      <ScrollView pt={4} p={6}>
        <FlatList
          data={exercises_filtered}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <HomeCard
              cardName={item.name}
              cardSub={`${item.series} ser. / ${item.repetitions} rep. / ${item.restTime} min.`}
              icons={
                <TouchableOpacity>
                  <Icon as={Feather} name="plus-circle" size="md" color="gray.100" />
                </TouchableOpacity>
              }
            />
          )}
        />
        <Center><Button title="Salvar" mt={4} /></Center>
        
      </ScrollView>
    </VStack>
  );
}
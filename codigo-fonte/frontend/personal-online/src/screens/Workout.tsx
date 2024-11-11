import { useEffect, useState, useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { VStack, HStack, Text, Icon, ScrollView, Input, Box, FlatList, Center, Heading, DeleteIcon } from "native-base";
import { useNavigation, useRoute } from '@react-navigation/native';
import { HomeCard } from "@components/HomeCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Button } from "@components/Button";
import { Feather, Entypo, Ionicons } from "@expo/vector-icons";

import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import { color } from "native-base/lib/typescript/theme/styled-system";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import AuthContext from "src/context/authContext";


export function Workout() {
  const { userType } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const route = useRoute();
  const { name, exercises } = route.params as any
  const [exercises_filtered, setExercises] = useState();

  const filtering = (string: String) => {
    setSearch(string)
    let array_clone = [...exercises];
    let res = array_clone.filter( item => item.name.toLowerCase().includes(string.toLowerCase()))
    setExercises(res)
  }

  const handleAddExercises = () => {
    navigation.navigate('workoutRegistration');
  }

  const handleExerciseDetail = (item) => {
    navigation.navigate('exercise', item);
  }

  useEffect(() => {
      setExercises(exercises)
  }, [exercises])

  return (
    <VStack flex={1} bg="#121214">
      <ScreenHeader title="TREINO A" />

      <HStack justifyContent="space-between" mb={1} mt={6} m={7}>
          <Heading color="gray.200" fontSize="md" fontFamily="heading">
              {name}
          </Heading>

          { userType === 'admin' &&
            <TouchableOpacity>
              <Icon as={Feather} name="plus-circle" size="md" color="gray.100" onPress={() => handleAddExercises()} />
            </TouchableOpacity>
          }
      </HStack>

      <ScrollView pt={4} p={6}>
        <FlatList
          data={exercises_filtered}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <HomeCard
              cardName={item.name}
              cardSub={`${item.series} ser. / ${item.repetitions} rep. / ${item.restTime} min.`}
              onPress={() => handleExerciseDetail(item)}
            />
          )}
        />
          { userType === 'aluno' &&
            <Center><Button title="Marcar como realizado" mt={4} /></Center>
          }

      </ScrollView>
    </VStack>
  );
}
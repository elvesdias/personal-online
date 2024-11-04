import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { VStack, HStack, Text, Icon, ScrollView, Input, Box, FlatList, Center, Heading } from "native-base";
import { Feather } from "@expo/vector-icons";
import { useRoute } from '@react-navigation/native';

import { ScreenHeader } from "@components/ScreenHeader";
import { Button } from "@components/Button";

import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { color } from "native-base/lib/typescript/theme/styled-system";

export function Workout() {
  const [search, setSearch] = useState("");
  const route = useRoute();
  const { name, day, exercises } = route.params as any
  const [exercises_filtered, setExercises] = useState(exercises);

  const filtering = (string: String) => {
    setSearch(string)
    let array_clone = [...exercises];
    let res = array_clone.filter( item => item.name.toLowerCase().includes(string.toLowerCase()))
    setExercises(res)
  }

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

          <Text color="gray.200" fontSize="sm">
              {day}
          </Text>
      </HStack>

      <ScrollView pt={4} p={6}>
        <FlatList
          data={exercises_filtered}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <HStack
              bg="#202024"
              mb={3}
              p={3}
              rounded="md"
              justifyContent="space-between"
              alignItems="center"
            >
              <VStack>
                <Text color="gray.100" fontSize="md" fontWeight="bold">
                  {item.name}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text color="#c4c4cc" fontSize="xs" marginRight={2}>
                    {item.series} ser. 
                  </Text>
                  <Text color="#c4c4cc" fontSize="xs" marginRight={2}>
                    {item.repetitions} rep. 
                  </Text>

                  <Text color="#c4c4cc" fontSize="xs" marginRight={2}>
                  {/* <Icon as={Clock} name="clock" size={30} color="#4CAF50" />  */}
                  {item.restTime} desc.
                  </Text>
                </View>
              </VStack>
              <TouchableOpacity>
                <Icon as={Feather} name="plus-circle" size="md" color="gray.100" />
              </TouchableOpacity>
            </HStack>
          )}
        />
        <Center><Button title="Salvar" mt={4} /></Center>
        
      </ScrollView>
    </VStack>
  );
}
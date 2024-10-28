import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { VStack, HStack, Text, Icon, ScrollView, Input, Box, FlatList, Center, Heading } from "native-base";
import { Feather } from "@expo/vector-icons";
import { useRoute } from '@react-navigation/native';

import { ScreenHeader } from "@components/ScreenHeader";
import { Button } from "@components/Button";

// const exercises = [
//   { id: 1, name: "Agachamento com Barra", details: "4 série x 12 rep x 1' intervalo" },
//   { id: 2, name: "Agachamento Sumô", details: "4 série x 12 rep x 1' intervalo" },
//   { id: 3, name: "Leg Press", details: "4 série x 12 rep x 1' intervalo" },
//   { id: 4, name: "Supino Inclinado", details: "4 série x 12 rep x 1' intervalo" },
//   { id: 5, name: "Afundo", details: "4 série x 12 rep x 1' intervalo" },
//   { id: 6, name: "Stiff", details: "4 série x 12 rep x 1' intervalo" },
// ];

export function Workout() {
  const [search, setSearch] = useState("");
  const route = useRoute();
  const { name, day, exercises } = route.params as any

  return (
    <VStack flex={1} bg="#121214">
      <ScreenHeader title="TREINO A" />
      
      <HStack p={4} pt={6} alignItems="center">
        <Input
          flex={1}
          bg="#202024"
          placeholder="Pesquisar Exercício"
          placeholderTextColor="gray.100"
          onChangeText={setSearch}
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
          data={exercises}
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
                {/* <Text color="#c4c4cc" fontSize="sm">
                  {item.details}
                </Text> */}
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
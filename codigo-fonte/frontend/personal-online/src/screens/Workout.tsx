import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { VStack, HStack, Text, Icon, ScrollView, Input, Box, FlatList } from "native-base";
import { Feather } from "@expo/vector-icons";

import { ScreenHeader } from "@components/ScreenHeader";
import { Button } from "@components/Button";

const exercises = [
  { id: 1, name: "Agachamento com Barra", details: "4 série x 12 rep x 1' intervalo" },
  { id: 2, name: "Agachamento Sumô", details: "4 série x 12 rep x 1' intervalo" },
  { id: 3, name: "Leg Press", details: "4 série x 12 rep x 1' intervalo" },
  { id: 4, name: "Supino Inclinado", details: "4 série x 12 rep x 1' intervalo" },
  { id: 5, name: "Afundo", details: "4 série x 12 rep x 1' intervalo" },
  { id: 6, name: "Stiff", details: "4 série x 12 rep x 1' intervalo" },
];

export function Workout() {
  const [search, setSearch] = useState("");

  return (
    <VStack flex={1} bg="#121214">
      <ScreenHeader title="TREINO A" />
      
      <HStack px={4} mt={4} mb={4} alignItems="center">
        <Input
          flex={1}
          bg="gray.700"
          placeholder="Pesquisar Exercício"
          placeholderTextColor="gray.400"
          onChangeText={setSearch}
          value={search}
          _focus={{ borderColor: "gray.500", bg: "gray.600" }}
        />
        <TouchableOpacity>
          <Icon as={Feather} name="search" size="md" color="gray.400" ml={2} />
        </TouchableOpacity>
      </HStack>

      <ScrollView px={4}>
        <FlatList
          data={exercises}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <HStack
              bg="gray.700"
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
                <Text color="gray.400" fontSize="sm">
                  {item.details}
                </Text>
              </VStack>
              <TouchableOpacity>
                <Icon as={Feather} name="plus-circle" size="md" color="blue.500" />
              </TouchableOpacity>
            </HStack>
          )}
        />
        <Button title="Salvar" mt={4} />
      </ScrollView>
    </VStack>
  );
}
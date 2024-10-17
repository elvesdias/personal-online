import { HomeHeader } from "@components/HomeHeader";
import { Button } from "@components/Button";  // ultilizar se a barra não aparecer ao executar
import { useNavigation } from '@react-navigation/native'; // sem navegação
import { useState } from "react";
import { Group } from "@components/Group";
import { VStack, HStack, Heading, Text, FlatList } from 'native-base';
import { ExerciseCard } from "@components/ExerciseCard"; // Pode apagar essa importação se conflitar com a tela ou substituila 

export function Home() {
    const [grupos, setGrupos] = useState(['Programa 1', 'Programa 2', 'Programa 3']);
    const [grupoSelecionado, setGrupoSelecionado] = useState(grupos[0]); // Estado para o grupo selecionado
    const [exercicios, setExercicios] = useState([]); // definir os dados de exercícios

    const handleAbrirDetalhesExercicio = (exercicio) => {
        // Lógica de navegação para abrir os detalhes do exercício pronto mas não definido por isso vermelho 
    };

    return (
        <VStack flex={1}>
            <HomeHeader />

            <FlatList
                data={grupos}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Group
                        name={item}
                        isActive={grupoSelecionado === item}
                        onPress={() => setGrupoSelecionado(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{ px: 8 }}
                my={10}
                maxH={10}
                minH={10}
            />

            <VStack flex={1} px={8}>
                <HStack justifyContent="space-between" mb={5}>
                    <Heading color="gray.200" fontSize="md" fontFamily="heading">
                        Exercícios
                    </Heading>

                    <Text color="gray.200" fontSize="sm">
                        {exercicios.length}
                    </Text>
                </HStack>

                <FlatList
                    data={exercicios}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <ExerciseCard 
                            data={item}
                            onPress={handleAbrirDetalhesExercicio}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 20 }}
                />
            </VStack>
        </VStack>
    );
}

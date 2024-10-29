import { useEffect, useState } from 'react';
import { HStack, VStack, FlatList, Heading, Text, useNativeBase } from 'native-base';
import axios from 'axios';
import { HomeHeader } from '@components/HomeHeader';
import { Group } from '@components/Group'
import { ExerciseCard } from '@components/ExerciseCard';
import { HomeCard } from '@components/HomeCard';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { Button } from "@components/Button";
import { programasJson } from "./../services/testDatas.json" // dados estáticos para testes

import { useRoute } from '@react-navigation/native';


export function Home() {

    const route = useRoute();

    let programsRoute = route.params as any; // acessa os parâmetros passados
    if(!programsRoute){
        programsRoute = programasJson;
        console.log('nao teve obj na rota')

    } else {
        // programsRoute = programsRoute.programs;
    }
    
    const [programs, setPrograms] = useState(programsRoute);

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleOpenExerciseDetails(item: any) {
        navigation.navigate('program', {
            name: item.name,
            day: item.day,
            workouts: item.workouts
        });
    }
    useEffect(() => {
        async function getProgram() {
            console.log('use effect home')
            const response = await axios.get("http://10.0.0.168:3333/programs")
            setPrograms(response.data)
        }
        getProgram()
    }, [])
    return (
        <VStack flex={1}>
            <HomeHeader />
           
            <VStack flex={1} px={8}>
                <HStack justifyContent="space-between" mb={5}>
                    <Heading color="gray.200" fontSize="md" fontFamily="heading">
                        Programas
                    </Heading>

                    <Text color="gray.200" fontSize="sm">
                        {programs.length}
                    </Text>
                </HStack>

                <FlatList
                    data={programs}
                    // keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <HomeCard
                            // data={item}
                            onPress={() => handleOpenExerciseDetails(item)}
                            cardName={item.name}
                            cardSub={item.workouts.length}
                            sufix={item.workouts.length === 1 ? 'Treino' : 'Treinos'}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 20 }}
                />

            </VStack>
        </VStack>
    );
}
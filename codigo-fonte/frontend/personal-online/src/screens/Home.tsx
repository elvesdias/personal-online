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

export function Home() {

    const [programs, setPrograms] = useState(['Puxada Frontal', 'Remada Curvada', 'Remada Unilateral', 'Rosca Direta', 'Rosca Scott c/ Barra W']);

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleOpenExerciseDetails() {
        navigation.navigate('exercise');
    }
    useEffect(() => {
        async function getProgram() {
            const response = await axios.get("http://10.0.0.168:3333/programs")
            setPrograms(response.data)
            // console.log(response.data)
        }
        getProgram()
    }, [])
    return (
        <VStack flex={1}>
            <HomeHeader />
            <Text color="gray.200" fontSize="sm">
                Aluno Home
            </Text>
           
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
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <HomeCard
                            data={item}
                            onPress={handleOpenExerciseDetails}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 20 }}
                />
        

            </VStack>
        </VStack>
    );
}
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
import { useRoute } from '@react-navigation/native';

export function Program() {

    const [programs, setPrograms] = useState();
    const route = useRoute();
    const { name, day, workouts } = route.params as any; // acessa os parâmetros passados

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleOpenExerciseDetails(workout: any) {
        navigation.navigate('workout', {
            name: workout.name,
            day: workout.day,
            exercises: workout.exercises
        });
    }
    useEffect(() => {
        async function getProgram() {
            const response = await axios.get("http://10.0.0.168:3333/programs")
            setPrograms(response.data)
            // console.log(response.data)
        }
        // getProgram()
    }, [])
    return (
        <VStack flex={1}>
            <HomeHeader />
           
            <VStack flex={1} px={8}>
                <HStack justifyContent="space-between" mb={5}>
                    <Heading color="gray.200" fontSize="md" fontFamily="heading">
                        {name}
                    </Heading>

                    <Text color="gray.200" fontSize="sm">
                        {day}
                    </Text>
                </HStack>

                <FlatList
                    data={workouts}
                    // keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <HomeCard
                            data={item}
                            cardName={item.name}
                            cardSub={item.day}
                            onPress={() => handleOpenExerciseDetails(item)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 20 }}
                />
        

            </VStack>
        </VStack>
    );
}
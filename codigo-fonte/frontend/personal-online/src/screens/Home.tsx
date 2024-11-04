import { useEffect, useState, useContext } from 'react';
import { HStack, VStack, FlatList, Heading, Text, useNativeBase } from 'native-base';
// import { URL_API } from '@env'
const URL_API = 'http://localhost:3333'

import axios from 'axios';
import { HomeHeader } from '@components/HomeHeader';
import { Group } from '@components/Group'
import { ExerciseCard } from '@components/ExerciseCard';
import { HomeCard } from '@components/HomeCard';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { Button } from "@components/Button";
// import { programasJson } from "./../services/testDatas.json" // dados estáticos para testes

import { useRoute } from '@react-navigation/native';
import AuthContext from "src/context/authContext";

export function Home() {

    const route = useRoute();
    const { userId } = useContext(AuthContext)

    let programsRoute = route.params as any; // acessa os parâmetros passados
    
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
            console.log('programa: ' + programs);
            if(!programs){
                const response = await axios.get(`${URL_API}/users/${userId}`)
                setPrograms(response.data.user.programs)
            }
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
                        {programs && programs.length}
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
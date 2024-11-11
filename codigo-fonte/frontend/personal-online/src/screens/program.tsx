import { useEffect, useState, useContext } from 'react';
import { HStack, VStack, FlatList, Heading, Text, useNativeBase, Center } from 'native-base';
import { HomeHeader } from '@components/HomeHeader';
import { HomeCard } from '@components/HomeCard';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { Button } from "@components/Button";
import { useRoute } from '@react-navigation/native';
import AuthContext from "src/context/authContext";
import { URL_API } from '@env'

export function Program() {

    const [workout, setWorkout] = useState();
    const route = useRoute();
    const { name, day, workoutsRoute } = route.params as any; // acessa os parâmetros passados
    const { userType } = useContext(AuthContext);
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleOpenWorkout(workout: any) {
        navigation.navigate('workout', {
            name: workout.name,
            day: workout.day,
            exercises: workout.exercises
        });
    }
    useEffect(() => {
        setWorkout(workoutsRoute)
    }, [workoutsRoute])

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
                    { userType === 'admin' && 
                        <Center><Button title="Novo Treino" bgColor='white' textcolor='black'/></Center>
                    }
                <FlatList
                    data={workout}
                    // keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <HomeCard
                            data={item}
                            cardName={item.name}
                            cardSub={item.exercises.length}
                            onPress={() => handleOpenWorkout(item)}
                            sufix={item.exercises.length === 1 ? "Exercício" : "Exercícios"}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 20 }}
                />
                { userType === 'admin' && 
                    <Center><Button title="Salvar Programa" bgColor='white' textcolor='black'/></Center>
                }
            </VStack>
        </VStack>
    );
}
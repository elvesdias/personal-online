import React, { useState, useEffect } from 'react';
import { HStack, Heading, Icon, Text, VStack, Image, Box, ScrollView } from 'native-base';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import { Button } from '@components/Button';

import CheckSvg from '../assets/check.svg';
export function Exercise() {
    const navigation = useNavigation<AppNavigatorRoutesProps>();
    const route = useRoute();
    const exercise = route.params;


    useEffect(() => {
    }, []);

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <VStack flex={1}>
            <VStack px={8} bg="blueGray.800" pt={12}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon as={Feather} name="arrow-left" color="gray.200" size={6} />
                </TouchableOpacity>

                <HStack justifyContent="space-between" mt={4} mb={8} alignItems="center">
                    <Heading color="gray.100" fontSize="lg" fontFamily="heading" flexShrink={1}>
                        {exercise.name}
                    </Heading>
                </HStack>
            </VStack>

            <ScrollView>
                <VStack p={8}>
                    <Image
                        w="full"
                        h={80}
                        source={{ uri: exercise.demo }}
                        alt="Nome do exercício"
                        mb={3}
                        resizeMode="cover"
                        rounded="lg"
                    />

                    <Box bg="blueGray.800" rounded="md" pb={4} px={4}>
                        <HStack mt={5}>
                            <Icon as={Ionicons} name='barbell-outline' size={8} color='blue.300'></Icon>
                            <Text color="gray.200" ml="2" fontSize="25">
                                {exercise.series} Séries
                            </Text>
                        </HStack>

                        <HStack>
                            <Icon as={Ionicons} name='repeat-outline' size={8} color='blue.300'></Icon>
                            <Text color="gray.200" ml="2" fontSize="25">
                                {exercise.repetitions} Repetições
                            </Text>
                        </HStack>

                        <HStack>
                            <Icon as={Ionicons} name='alarm-outline' size={8} color='blue.300'></Icon>
                            <Text color="gray.200" ml="2" fontSize="25">
                                {exercise.restTime} {exercise.restTime === 1 ? 'Minuto' : 'Minutos'}
                            </Text>
                        </HStack>
                    </Box>
                </VStack>
            </ScrollView>
        </VStack>
    );
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

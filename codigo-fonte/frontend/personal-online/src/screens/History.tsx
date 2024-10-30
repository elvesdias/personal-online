import { ScreenHeader } from "@components/ScreenHeader";
import { HistoryCard } from "@components/HistoryCard";

import { Heading, VStack, SectionList, Text } from "native-base";
import { useState } from "react";

export function History() {
    const [exercises, setExercises] = useState([
        {
            title: "23.09.2024",
            data: ["TREINO A"],
        },
        {
            title: "24.09.2024",
            data: ["TREINO B"],
        },
    ]);

    return (
        <VStack flex={1}>
            <ScreenHeader title="Histórico de Treinos" />

            <SectionList
                sections={exercises}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <HistoryCard />}
                renderSectionHeader={({ section }) => (
                    <Heading
                        color="gray.200"
                        fontSize="md"
                        fontFamily="heading"
                        mt={10}
                        mb={3}
                    >
                        {section.title}
                    </Heading>
                )}
                px={8}
                contentContainerStyle={
                    exercises.length === 0 && { flex: 1, justifyContent: "center" }
                }
                ListEmptyComponent={() => (
                    <Text color="gray.100" textAlign="center">
                        Não há treinos registrados ainda. {"\n"}
                        Vamos treinar hoje?
                    </Text>
                )}
            />
        </VStack>
    );
}

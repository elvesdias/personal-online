import { Heading, HStack, VStack, Text, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from "@expo/vector-icons";

interface HomeCardProps extends TouchableOpacityProps {
  cardName: string; // Novo: Nome do programa para o Heading
  cardSub: string; // Novo: Texto sobre o número de treinos
}

export function HomeCard({ cardName, cardSub, ...rest }: HomeCardProps) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="gray.500"
        alignItems="center"
        p={2}
        pr={4}
        rounded="md"
        mb={3}
      >
        <VStack flex={1}>
          <Heading fontSize="md" color="white" fontFamily="heading">
            {cardName}
          </Heading>

          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            {cardSub}
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  );
}

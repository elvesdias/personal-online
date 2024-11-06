import { Heading, HStack, VStack, Text, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from "@expo/vector-icons";

interface HomeCardProps extends TouchableOpacityProps {
  cardName: string; // Novo: Nome do programa para o Heading
  cardSub: number; // Novo: Texto sobre o número de treinos
  sufix: string; //sufixo para ser usado após a string de cardSub
  padding: number
}

export function HomeCard({ cardName, cardSub, sufix, padding = 6, ...rest }: HomeCardProps) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="gray.500"
        alignItems="center"
        p={padding}
        pr={4}
        rounded="md"
        mb={3}
      >
        <VStack flex={1} 
          margin={0}
          ml={3}
        >
          <Heading fontSize="md" color="white" fontFamily="heading" top={cardSub !== undefined ? 0 : 3}>
            {cardName}
          </Heading>

          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            {cardSub} {sufix}
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  );
}

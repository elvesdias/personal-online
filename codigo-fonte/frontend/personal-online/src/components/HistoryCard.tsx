// import { HStack, Heading, VStack, Text } from "native-base";

// export function HistoryCard({_id, workoutName, programName}) {
//     return (
//         <HStack w="full" px={5} py={4} mb={3} bg="blueGray.800" rounded="md" alignItems="center" justifyContent="space-between" >
//             <VStack mr={5} flex={1}>
//             <Heading color="white" fontSize="md" textTransform="capitalize" fontFamily="heading" numberOfLines={1}>
//                     {workoutName || "Treino A"}
//                 </Heading>

//                 <Text color="gray.100" fontSize="lg" numberOfLines={1} >
//                    {programName} 
//                 </Text>
//             </VStack>

//             <Text color="gray.300" fontSize="md" >
//               {/* 9:09  receber data como propriedade formatar e colocar aqui*/}
//             </Text>
//         </HStack>
//     );
// }

import { HStack, Heading, VStack, Text } from "native-base";
import { format } from "date-fns"; // Importa a função de formatação do date-fns

// Componente HistoryCard
export function HistoryCard({ _id, workoutName, programName, date }) {
  console.log("Date passed to HistoryCard:", date); // Verifique o valor da data aqui

  // Formatar a data
  const formattedDate = date ? format(new Date(date), "HH:mm") : "Sem data"; // Formato para horas e minutos (exemplo: "09:09")

  return (
    <HStack w="full" px={5} py={4} mb={3} bg="blueGray.800" rounded="md" alignItems="center" justifyContent="space-between">
      <VStack mr={5} flex={1}>
        <Heading color="white" fontSize="md" textTransform="capitalize" fontFamily="heading" numberOfLines={1}>
          {workoutName || "Treino A"}
        </Heading>

        <Text color="gray.100" fontSize="lg" numberOfLines={1}>
          {programName}
        </Text>
      </VStack>

      <Text color="gray.300" fontSize="md">
        {formattedDate} {/* Exibe a data formatada */}
      </Text>
    </HStack>
  );
}

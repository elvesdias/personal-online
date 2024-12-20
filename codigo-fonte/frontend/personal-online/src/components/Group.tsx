import { Text, Pressable, IPressableProps } from "native-base";

type Props = IPressableProps & {
    name: string;
    isActive: boolean;
}

export function Group({ name, isActive, ...rest } : Props) {
    return (
        <Pressable
            mr={3}
            w={24}
            h={10}
            bg="blueGray.800"
            rounded="md"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            isPressed={isActive}
            _pressed={{
                borderColor: "blue.100",
                borderWidth: 1
            }}
            {...rest}
        >
        <Text
            color={isActive ? "blue.500" : "gray.200"}
            textTransform="uppercase"
            fontSize="xs"
            fontWeight="bold"
        >
            {name}
        </Text>
        </Pressable>
    );
}
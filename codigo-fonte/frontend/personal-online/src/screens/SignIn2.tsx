import { VStack, Image, Center, Heading } from "@gluestack-ui/themed";

import BackgroundImg from "../../assets/background.png";
import Logo from "../../assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
    return (
        <VStack flex={1} bg="$gray700">
            <Image
                w="$full"
                h="$full"
                source={BackgroundImg}
                alt="Academia"
                defaultSource={BackgroundImg}
                position="absolute"
            />
            <VStack flex={1} px="$10" pb="$16">
                <Center my="$24">
                    <Logo />
                </Center>

                <Center gap="$2">
                    <Heading color="$white">Acesse a conta</Heading>
                    <Input
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Input placeholder="Senha" secureTextEntry />

                    <Button title="Acessar" />
                </Center>
            </VStack>
        </VStack>
    );
}
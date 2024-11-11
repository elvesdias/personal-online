import { Button as ButtonNativeBase, Center, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
    title: string;
    variant?: 'solid' | 'outline';
    textcolor: string
}

export function Button({title, variant = 'solid', textcolor, ...rest}: Props) {
    return(
        <ButtonNativeBase 
        alignItems="center"
        p={6}
        pr={4}
        mb={3}
        h={14}
        width='100%'
    
        bg={variant === "outline" ? "transparent" : "#053a72"}
        borderWidth={variant === "outline" ? 2 : 0}
        borderColor={"#ffffff"}
        rounded="sm"
        _pressed={{
            bg: variant === "outline" ? "gray.500" : "#ffffff"
        }}
        {...rest}
        >
            <Text 
            margin={4}
            color={textcolor ? textcolor : (variant === "outline" ? "#ffffff" : "#ffffff")}
            fontFamily="heading" 
            fontSize="sm"
            >
                {title}
            </Text>
        </ButtonNativeBase>
    );
}
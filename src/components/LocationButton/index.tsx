import { Recycle } from "phosphor-react-native";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";
import { Container } from "./styles";

export function LocationButton({ ...rest }: TouchableOpacityProps) {
    const { COLORS } = useTheme()

    return (
        <Container
            {...rest}
        >
            <Recycle 
                size={96}
                color={COLORS.GREEN_500}
            />
        </Container>
    )
}
import { TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";

export function CloseButton({ ...rest }: TouchableOpacityProps) {
    return (
        <Container
            {...rest}
        >
            <Icon
                name='close'
            />
        </Container>
    )
}
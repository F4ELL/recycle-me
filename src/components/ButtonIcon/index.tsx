import { TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";

export function ButtonIcon({ ...rest }: TouchableOpacityProps) {
    return (
        <Container
            {...rest}
        >
            <Icon 
                name='done'
            />
        </Container>
    )
}
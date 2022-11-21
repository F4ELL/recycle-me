import { TouchableOpacityProps } from "react-native";
import { Container, LocaleButton, Icon } from "./styles";

export function LocationButton({ ...rest }: TouchableOpacityProps) {
    return (
        <Container>
            <LocaleButton
                {...rest}
            >
                <Icon 
                    name='recycling'
                />
            </LocaleButton>
        </Container>
    )
}
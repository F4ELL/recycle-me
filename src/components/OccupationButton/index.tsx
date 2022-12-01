import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
    title: string
    isActive: boolean
}

export function OccupationButton({ title, isActive, ...rest }: Props) {
    return (
        <Container
            {...rest}
            isActive={isActive}
        >
            <Title>
                {title}
            </Title>
        </Container>
    )
}
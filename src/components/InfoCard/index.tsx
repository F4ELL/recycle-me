import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
    title: string
    iconName: string
}

export function InfoCard({ title, iconName, ...rest }: Props) {
    return (
        <Container
            {...rest}
        >
            <Icon 
                name={iconName}
            />

            <Title>
                {title}
            </Title>

        </Container>
    )
}
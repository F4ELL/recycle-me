import { Recycle } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Container, Title } from "./styles";

type Props = {
    title: string
}

export function HistoricItem({ title }: Props) {
    const { COLORS } = useTheme()

    return (
        <Container>
            <Recycle 
                size={24}
                color={COLORS.GRAY_200}
            />

            <Title>
                {title}
            </Title>
        </Container>
    )
}
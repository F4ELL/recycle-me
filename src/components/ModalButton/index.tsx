import { TouchableOpacityProps } from "react-native"
import { Container, Icon, Title } from "./styles"

type Props = TouchableOpacityProps & {
    title: string
    iconName: string
    isActive: boolean
}

export function ModalButton({ title, iconName, isActive, ...rest }: Props) {
    return (
        <Container
            isActive={isActive}
            {...rest}
        >
            <Icon 
                name={iconName}
                isActive={isActive}
            />

            <Title
                isActive={isActive}
            >
                {title}
            </Title>
        </Container>
    )
}
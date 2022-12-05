import { Container, Icon, Message } from "./styles";

type Props = {
    message: string
}

export function EmptyList({ message }: Props) {
    return (
        <Container>
            <Icon 
                name='info'
            />

            <Message>
                {message}
            </Message>
        </Container>
    )
}
import { Container, Title } from "./styles";
import { SignIn } from 'phosphor-react-native'

export function Logout() {
    return (
        <Container>
            <Title>
                logout
            </Title>

            <SignIn 
                color='#7C7C8A'
            />
        </Container>
    )
}
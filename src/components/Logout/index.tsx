import { useNavigation } from '@react-navigation/native'
import { Container, Title } from "./styles";
import { SignIn } from 'phosphor-react-native'

export function Logout() {
    const navigation = useNavigation()

    function handleLogout() {
        navigation.navigate('login')
    }

    return (
        <Container
            onPress={handleLogout}
        >
            <Title>
                logout
            </Title>

            <SignIn 
                color='#7C7C8A'
            />
        </Container>
    )
}
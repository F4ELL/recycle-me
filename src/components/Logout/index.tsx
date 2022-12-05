import { useNavigation } from '@react-navigation/native'
import { Container, Title } from "./styles";
import { SignIn } from 'phosphor-react-native'
import { Alert } from 'react-native';

export function Logout() {
    const navigation = useNavigation()

    function handleLogout() {
        navigation.navigate('login')
    }

    function handleLogoutMessage() {
        Alert.alert('Logout', 'Tem certeza que deseja sair?', [
            {
                text: 'Sim',
                onPress: () => handleLogout()
            },
            {
                text: 'Não',
            }
        ])
    }

    return (
        <Container
            onPress={handleLogoutMessage}
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
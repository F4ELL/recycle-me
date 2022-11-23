import { useNavigation } from '@react-navigation/native'
import { Header } from "../../components/Header";
import { Container, Title, TitleArea } from "./styles";
import { Highlight } from "../../components/Highlight";
import { OccupationButton } from "../../components/OccupationButton";
import { Button } from "../../components/Button";
import { Logout } from "../../components/Logout";

export function Occupation() {
    const navigation = useNavigation()

    function handleHomeUser() {
        navigation.navigate('homecollector')
    }

    return (
        <Container>
            <Header />

            <Highlight 
                title='Recycle.me'
                subtitle='mais que uma obrigação, a reciclagem é uma necessidade'
            />

            <TitleArea>
                <Title>
                    O que deseja fazer? 
                    Depositar ou coletar?
                </Title>
            </TitleArea>

            <OccupationButton 
                title='Depositar'
                style={{ marginTop: 32 }}
            />

            <OccupationButton 
                title='Coletar'
                style={{ marginTop: 12 }}
            />

            <Button 
                title='Seguir'
                onPress={handleHomeUser}
                style={{ marginTop: 32 }}
            />

        </Container>
    )
}
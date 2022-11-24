import { useNavigation } from '@react-navigation/native'
import { ButtonArea, Container } from "./styles";
import { Highlight } from "../../components/Highlight";
import { Header } from "../../components/Header";
import { SubHighlight } from "../../components/SubHighlight";
import { Logout } from "../../components/Logout";
import { LocationButton } from "../../components/LocationButton";
import { InfoCard } from "../../components/InfoCard";

export function HomeUser() {
    const navigation = useNavigation()

    function handleStatisticsUser() {
        navigation.navigate('statisticsuser')
    }

    function handleHistoric() {
        navigation.navigate('historic')
    }

    return (
        <Container>
            <Header 
                showBackButton
            />

            <Highlight 
                title='Recycle.me'
                subtitle='mais que uma obrigação, a reciclagem é uma necessidade'
            />

            <SubHighlight 
                title='Já reciclou seu lixo hoje?'
                subtitle='clique no botão abaixo para enviar a localização aos coletores'
            />

            <ButtonArea>
                <LocationButton 
                    style={{ marginTop: 24 }}
                />
            </ButtonArea>

            <InfoCard 
                title='Histórico'
                iconName='timer'
                onPress={handleHistoric}
                style={{ marginTop: 24 }}
            />

            <InfoCard 
                title='Estatísticas'
                iconName='insights'
                onPress={handleStatisticsUser}
            />

            <Logout />
        </Container>
    )
}
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { InfoCard } from "../../components/InfoCard";
import { Logout } from "../../components/Logout";
import { SubHighlight } from "../../components/SubHighlight";
import { Container } from "./styles";

export function HomeCollector() {
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
                title='Bem vindo Coletor!'
            />

            <InfoCard 
                title='Pontos para coleta'
                iconName='explore'
                style={{ marginTop: 24 }}
            />

            <InfoCard 
                title='Estatísticas'
                iconName='insights'
            />

            <Logout />
        </Container>
    )
}
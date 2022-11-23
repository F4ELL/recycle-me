import { Header } from "../../components/Header";
import { SubHighlight } from "../../components/SubHighlight";
import { Highlight } from "../../components/Highlight";
import { Container } from "./styles";
import { Logout } from "../../components/Logout";
import { Record } from "../../components/Record";

export function StatisticsCollector() {
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
                title='Estatísticas'
            />

            <Record 
                title='15'
                subtitle='coletas de lixo reciclável'
                style={{ marginTop: 12 }}
            />

            <Record 
                title='5'
                subtitle='mais coletas de lixo reciclável em um dia'
                style={{ marginTop: 12 }}
            />

            <Logout />
        </Container>
    )
}
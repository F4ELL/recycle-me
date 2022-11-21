import { Container } from "./styles";
import { Highlight } from "../../components/Highlight";
import { Header } from "../../components/Header";
import { SubHighlight } from "../../components/SubHighlight";
import { Logout } from "../../components/Logout";

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
                title='Já reciclou seu lixo hoje?'
                subtitle='clique no botão abaixo para enviar a localização aos coletores'
            />

            <Logout />
        </Container>
    )
}
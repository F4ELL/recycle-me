import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { HistoricItem } from "../../components/HistoricItem";
import { SubHighlight } from "../../components/SubHighlight";
import { Container } from "./styles";

export function Historic() {
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
                title='Histórico'
            />

            <HistoricItem 
                title='04/11/2022'
            />
            <HistoricItem 
                title='05/11/2022'
            />
            <HistoricItem 
                title='06/11/2022'
            />
            <HistoricItem 
                title='07/11/2022'
            />

        </Container>
    )
}
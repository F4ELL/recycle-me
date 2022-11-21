import { AddressCard } from "../../components/AddressCard";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { SubHighlight } from "../../components/SubHighlight";
import { Container } from "./styles";

export function Points() {
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
                title='Pontos para coleta'
            />

            <AddressCard 
                address='Rua Brasil, Jardim América'
            />
            <AddressCard 
                address='Rua Argentina, Jardim América'
            />
            <AddressCard 
                address='Rua Chile, Jardim América'
            />
        </Container>
    )
}
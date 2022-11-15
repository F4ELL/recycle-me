import { Header } from "../../components/Header";
import { Container, Title, TitleArea } from "./styles";
import { Highlight } from "../../components/Highlight";
import { OccupationButton } from "../../components/OccupationButton";
import { Button } from "../../components/Button";
import { Logout } from "../../components/Logout";

export function Occupation() {
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
                style={{ marginTop: 32 }}
            />

            <Logout />

        </Container>
    )
}
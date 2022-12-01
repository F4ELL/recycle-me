import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { Container, Title, TitleArea } from "./styles";

export function SignUp() {
    return (
        <Container>
            <Header 
                showBackButton
            />

            <Highlight 
                title='Recycle.me'
                subtitle='mais que uma obrigação, a reciclagem é uma necessidade'
            />

            <TitleArea
                style={{ marginBottom: 20 }}
            >
                <Title>
                    Cadastre-se
                </Title>
            </TitleArea>

            <Input 
                placeholder='Nome'
                style={{ marginBottom: 12 }}
            />

            <Input 
                placeholder='Endereço'
                style={{ marginBottom: 12 }}
            />

            <Input 
                placeholder='Email'
                style={{ marginBottom: 12 }}
            />

            <Input 
                secureTextEntry
                placeholder='Password'
                style={{ marginBottom: 12 }}
            />

            <Button 
                title='Cadastrar'
                style={{ marginTop: 32 }}
            />
        </Container>
    )
}
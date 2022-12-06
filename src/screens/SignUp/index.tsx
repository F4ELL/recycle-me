import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { apiUrl } from "../../utils/api";
import { Container, Title, TitleArea } from "./styles";

export function SignUp() {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    async function handleSignUp() {
        if (name.length === 0 || address.length === 0 || email.length === 0 || password.length === 0) {
            Alert.alert('Preencha todos os campos!')
        } else {
            try {
                const response = await fetch(`${apiUrl}/register`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, address, email, password })
                })

                const data = await response.json()
                console.log(data)

                Alert.alert('Usuário cadastrado com sucesso!')
                navigation.navigate('login')

            } catch(error) {
                console.log(error)
            }
        }
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
                onChangeText={name => setName(name)}
                value={name}
            />

            <Input
                placeholder='Endereço'
                style={{ marginBottom: 12 }}
                onChangeText={address => setAddress(address)}
                value={address}
            />

            <Input
                placeholder='Email'
                style={{ marginBottom: 12 }}
                onChangeText={email => setEmail(email)}
                value={email}
            />

            <Input
                secureTextEntry
                placeholder='Password'
                style={{ marginBottom: 12 }}
                onChangeText={password => setPassword(password)}
                value={password}
            />

            <Button
                title='Cadastrar'
                onPress={handleSignUp}
                style={{ marginTop: 32 }}
            />
        </Container>
    )
}
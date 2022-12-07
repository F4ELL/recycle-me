import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Alert } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { User, UserContext } from "../../contexts/auth";
import { apiUrl } from "../../utils/api";
import { Container, Title, TitleArea } from "./styles";

type UserWithPassword = User & { password?: string }

export function SignUp() {
    const [newUser, setNewUser] = useState<UserWithPassword>()
    const { setUser } = useContext(UserContext)

    const navigation = useNavigation()

    function handleUser(key: string, value: string) {
        setNewUser({...newUser, [key]: value})
    }

    function validation(user: UserWithPassword) {
        if(user.name && user.address && user.email && user.password) {
            return true
        } 
    
        return false
    }

    function register(user: UserWithPassword) {

        return fetch(`${apiUrl}/register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: user.name, address: user.address, email: user.email, password: user.password })
        })
    }

    function handleSignUp() {
        const validate = validation(newUser || {})

        if (!validate) {
            Alert.alert('Preencha todos os campos!')
            return
        }

        if(newUser) {
            register(newUser)
            .then(response => response.json())
            .then(data => { 
                if(data.status === 400) {
                    Alert.alert('Usuário já existe!')
                    return
                }
                
                setUser(data.user)
                navigation.navigate('occupation')
             })
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
                onChangeText={name => handleUser('name', name)}
                value={newUser?.name}
            />

            <Input
                placeholder='Endereço'
                style={{ marginBottom: 12 }}
                onChangeText={address => handleUser('address', address)}
                value={newUser?.address}
            />

            <Input
                placeholder='Email'
                style={{ marginBottom: 12 }}
                onChangeText={email => handleUser('email', email)}
                value={newUser?.email}
            />

            <Input
                secureTextEntry
                placeholder='Password'
                style={{ marginBottom: 12 }}
                onChangeText={password => handleUser('password', password)}
                value={newUser?.password}
            />

            <Button
                title='Cadastrar'
                onPress={handleSignUp}
                style={{ marginTop: 32 }}
            />
        </Container>
    )
}
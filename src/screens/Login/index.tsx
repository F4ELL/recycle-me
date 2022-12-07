import { useNavigation } from '@react-navigation/native'
import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { Input } from '../../components/Input';
import { UserContext } from '../../contexts/auth';
import { apiUrl } from '../../utils/api';
import { UserWithPassword } from '../SignUp';
import { Container, SignUpButton, SignUpText } from './styles';

export function Login() {
  const [ loginUser, setLoginUser ] = useState<UserWithPassword>()
  const { setUser } = useContext(UserContext)

  const navigation = useNavigation()

  function handleToSignUp() {
    navigation.navigate('signup')
  }

  function handleToOccupation() {
    navigation.navigate('occupation')
  }

  function handleUser(key: string, value: string) {
    setLoginUser({...loginUser, [key]: value})
  }

  function validation(user: UserWithPassword) {
    if(user.email && user.password) {
        return true
    } 

    return false
  }

  function login(user: UserWithPassword) {

    return fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: user.email, password: user.password })
    })

  }

  function handleLogin() {
    const validate = validation(loginUser || {})

        if (!validate) {
            Alert.alert('Preencha todos os campos!')
            return
        }

        if(loginUser) {
            login(loginUser)
            .then(response => response.json())
            .then(data => { 
                if(data.status === 404) {
                    Alert.alert('Usuário não encontrado!')
                    return
                }
                
                setUser(data.user)
                navigation.navigate('occupation')
            })
        }
  }

  return (
    <Container>
      <Header />
      
      <Highlight 
        title='Recycle.me'
        subtitle='mais que uma obrigação, a reciclagem é uma necessidade'
      />
      
      <Input 
        placeholder='Email'
        style={{marginBottom: 12}}
        onChangeText={email => handleUser('email', email)}
        value={loginUser?.email}
      />
      
      <Input 
        secureTextEntry
        placeholder='Password'
        style={{ marginBottom: 32 }}
        onChangeText={password => handleUser('password', password)}
        value={loginUser?.password}
      />
      
      <Button 
        title='Entrar'
        onPress={handleLogin}
      />

      <SignUpButton
        onPress={handleToSignUp}
      >
        <SignUpText>
          Ainda não possui uma conta?  Cadastre-se
        </SignUpText>
      </SignUpButton>
    </Container>
  );
}

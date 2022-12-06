import { useNavigation } from '@react-navigation/native'
import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { Input } from '../../components/Input';
import { UserContext } from '../../contexts/auth';
import { apiUrl } from '../../utils/api';
import { Container, SignUpButton, SignUpText } from './styles';

export function Login() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const { setUser } = useContext(UserContext)

  const navigation = useNavigation()

  function handleToSignUp() {
    navigation.navigate('signup')
  }

  function handleToOccupation() {
    navigation.navigate('occupation')
  }

  function cleanInputs() {
    setEmail('')
    setPassword('')
  }

  async function handleLogin() {
    if(email.length === 0 || password.length === 0) {
      Alert.alert('Preencha todos os campos!')
    } else {
      
      try {
        const response = await fetch(`${apiUrl}/login`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        })

        const data = await response.json()
        setUser(data)

        handleToOccupation()
        cleanInputs()

      } catch(error) {
        Alert.alert('Usuário não encontrado!')
      }
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
        onChangeText={email => setEmail(email)}
        value={email}
      />
      
      <Input 
        secureTextEntry
        placeholder='Password'
        style={{ marginBottom: 32 }}
        onChangeText={password => setPassword(password)}
        value={password}
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

import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';
import { Alert } from 'react-native';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { Input } from '../../components/Input';
import { Container, SignUpButton, SignUpText } from './styles';

export function Login() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const navigation = useNavigation()

  function handleSignUp() {
    navigation.navigate('signup')
  }

  function handleNewUser() {
    navigation.navigate('occupation')
  }

  function cleanInputs() {
    setEmail('')
    setPassword('')
  }

  function handleLogin() {
    if(email.length === 0 || password.length === 0) {
      Alert.alert('Preencha todos os campos!')
    } else {
      handleNewUser()
      cleanInputs()
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
        onPress={handleSignUp}
      >
        <SignUpText>
          Ainda não possui uma conta?  Cadastre-se
        </SignUpText>
      </SignUpButton>
    </Container>
  );
}

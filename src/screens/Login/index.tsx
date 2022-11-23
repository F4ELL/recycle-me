import { useNavigation } from '@react-navigation/native'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { Input } from '../../components/Input';
import { Container, SignUpButton, SignUpText } from './styles';

export function Login() {
  const navigation = useNavigation()

  function handleSignUp() {
    navigation.navigate('signup')
  }

  function handleNewUser() {
    navigation.navigate('occupation')
  }

  return (
    <Container>
      <Header />
      
      <Highlight 
        title='Recycle.me'
        subtitle='mais que uma obrigação, a reciclagem é uma necessidade'
      />
      
      <Input 
        placeholder='Username'
        style={{marginBottom: 12}}
      />
      
      <Input 
        secureTextEntry
        placeholder='Password'
        style={{ marginBottom: 32 }}
      />
      
      <Button 
        title='Entrar'
        onPress={handleNewUser}
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

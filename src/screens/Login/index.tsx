import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { Input } from '../../components/Input';
import { Container } from './styles';

export function Login() {
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
        placeholder='Password'
      />
    </Container>
  );
}

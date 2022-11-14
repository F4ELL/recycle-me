import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { Container } from './styles';

export function Login() {
  return (
    <Container>
      <Header />
      <Highlight 
        title='Recycle.me'
        subtitle='mais que uma obrigação, a reciclagem é uma necessidade'
      />
    </Container>
  );
}

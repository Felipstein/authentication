import { Container } from './styles';

export default function ToastMessage({ text }) {
  return (
    <Container>
      {text}
    </Container>
  );
}
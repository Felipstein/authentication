import { Container, InputStyled } from './styles';

export default function Input({ children, ...rest }) {
  return (
    <Container>
      {children}
      <InputStyled {...rest} />
      <span>
        Email é obrigatório!
      </span>
    </Container>
  );
}
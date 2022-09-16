import ToastMessage from '../ToastMessage';

import { Container } from './styles';

export default function ToastContainer() {
  return (
    <Container>
      <ToastMessage text="Success toast" />
      <ToastMessage text="Info toats" />
      <ToastMessage text="Warning toast" />
      <ToastMessage text="Danger toast" />
      <ToastMessage text="A biggest anormal default uncommon toast" />
      <ToastMessage text="Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum " />
    </Container>
  );
}
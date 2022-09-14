import linkedinIcon from '../../assets/images/icons/linkedin.svg';
import githubIcon from '../../assets/images/icons/github.svg';

import AuthButton from "../../components/AuthButton";
import Logo from "../../components/Logo";

import { Container, AboutContainer, LoginContainer } from "./styles";

export default function Login() {
  return (
    <Container>
      <AboutContainer>
        <main>
          <Logo />
          <h1 className="title">
            Bem vindo(a) à minha aplicação de prática em sistema de autenticação!
          </h1>
        </main>
        <footer>
          <strong>
            Estudo de caso de:
          </strong>
          <span>
            Felipe Oliveira, 2022. Acesse o repositório dessa aplicação em {' '}
            <a
              href="https://github.com/Felipstein" target="_blank"
            >
              https://github.com/Felipstein
            </a>
            .
          </span>
        </footer>
      </AboutContainer>
      <LoginContainer>
        <main>
          <h2>Faça login em sua conta</h2>
          <form>
            <div className="inputs">
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Senha" />
            </div>
            <div className="actions">
              <AuthButton type="submit">Logar</AuthButton>
              <button className="forgot-btn" type="button">Esqueceu a senha?</button>
            </div>
          </form>
        </main>
        <footer>
          <strong>
            Contato / Suporte
          </strong>
          <span>
            Entre em contato comigo pelo meu e-mail {' '}
            <a
              href='mailto:luisfelipe-oliveira@outlook.com.br'
            >
              luisfelipe-oliveira@outlook.com.br
            </a>
          </span>
        </footer>
      </LoginContainer>
    </Container>
  );
}
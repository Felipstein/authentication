import PropTypes from 'prop-types';
import { GitHub, LinkedIn } from "@material-ui/icons";

import Logo from "../Logo";

import { Container, AboutContainer, AuthContainer } from "./styles";

export default function AuthPage({ title, side, onSubmit, children }) {
  return (
    <Container side={side}>
      <AboutContainer side={side}>
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
      <AuthContainer side={side}>
        <main>
          <h2>{title}</h2>
          <form onSubmit={onSubmit} noValidate>
            {children}
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
            ou pela minhas redes sociais
            <nav>
              <a href="#">
                <GitHub />
              </a>
              <a href="#">
                <LinkedIn />
              </a>
            </nav>
          </span>
        </footer>
      </AuthContainer>
    </Container>
  );
}

AuthPage.propTypes = {
  title: PropTypes.string.isRequired,
  side: PropTypes.oneOf(['left', 'right']),
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

AuthPage.defaultProps = {
  side: 'right',
}
import { Link } from "react-router-dom";

import AuthPage from "../../components/AuthPage";
import AuthButton from "../../components/AuthButton";

export default function Login() {
  function handleSubmit(event) {
    event.preventDefault();

    console.log('submit');
  }

  return (
    <AuthPage title="Faça login em sua conta" onSubmit={handleSubmit} >
      <div className="inputs">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
      </div>
      <div className="actions">
        <AuthButton type="submit">Logar</AuthButton>
        <Link className="navigate-btn" to="/register">Não possui uma conta?</Link>
        <Link className="navigate-btn" to="#">Esqueceu a senha?</Link>
      </div>
    </AuthPage>
  );
}
import { Link } from "react-router-dom";

import AuthPage from "../../components/AuthPage";
import AuthButton from "../../components/AuthButton";

export default function Register() {
  function handleSubmit(event) {
    event.preventDefault();
    
    console.log('submit');
  }

  return (
    <AuthPage title="Cadastre uma conta" side="left" onSubmit={handleSubmit}>
      <div className="inputs">
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirmar Senha" />
      </div>
      <div className="actions">
        <AuthButton type="submit" side="left">Registrar</AuthButton>
        <Link className="navigate-btn" to="/login" >Já possui uma conta?</Link>
      </div>
    </AuthPage>
  );
}
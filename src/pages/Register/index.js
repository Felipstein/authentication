import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import AuthPage from "../../components/AuthPage";
import AuthButton from "../../components/AuthButton";

export default function Register() {
  const { authenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(authenticated) {
      navigate('/');
    }
  }, []);

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
        <Link className="navigate-btn" to="/login">Já possui uma conta?</Link>
      </div>
    </AuthPage>
  );
}
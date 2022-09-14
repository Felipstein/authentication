import { Link } from "react-router-dom";

import AuthPage from "../../components/AuthPage";
import AuthButton from "../../components/AuthButton";
import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  function handleToggleAuthenticateMode() {
    setIsLogin(prevState => !prevState);
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    console.log('submit');
  }

  return (
    <>
      {isLogin ? (
        <AuthPage title="Faça login em sua conta" onSubmit={handleSubmit} >
          <div className="inputs">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
          </div>
          <div className="actions">
            <AuthButton type="submit">Logar</AuthButton>
            <button className="navigate-btn" onClick={handleToggleAuthenticateMode}>Não possui uma conta?</button>
            <button className="navigate-btn">Esqueceu a senha?</button>
          </div>
        </AuthPage>
      ) : (
        <AuthPage title="Cadastre uma conta" side="left" onSubmit={handleSubmit}>
          <div className="inputs">
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Confirmar Senha" />
          </div>
          <div className="actions">
            <AuthButton type="submit" side="left">Registrar</AuthButton>
            <button className="navigate-btn" onClick={handleToggleAuthenticateMode}>Já possui uma conta?</button>
          </div>
        </AuthPage>
      )}
    </>
  );
}
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import AuthPage from "../../components/AuthPage";
import AuthButton from "../../components/AuthButton";
import Input from "../../components/Input";
import { Lock, Person } from "@material-ui/icons";
import { useTheme } from "styled-components";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authenticated, isLoading, login } = useContext(AuthContext);
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    if(authenticated) {
      navigate('/');
    }
  }, [authenticated]);
  
  function handleEmailInputChange(event) {
    const email = event.target.value;

    setEmail(email);
  }
  
  function handlePasswordInputChange(event) {
    const password = event.target.value;

    setPassword(password);
  }

  function handleSubmit(event) {
    event.preventDefault();

    login(email, password);
  }

  return (
    <AuthPage title="Faça login em sua conta" onSubmit={handleSubmit} >
      <div className="inputs">
        <Input
          value={email}
          type="email"
          placeholder="Email"
          onChange={handleEmailInputChange}
        >
          <Person style={{ color: theme.colors.primary.background }} />
        </Input>
        <Input
          value={password}
          type="password"
          placeholder="Senha"
          onChange={handlePasswordInputChange}
        >
          <Lock style={{ color: theme.colors.primary.background }} />
        </Input>
      </div>
      <div className="actions">
        <AuthButton type="submit" loading={isLoading}>Logar</AuthButton>
        <Link className="navigate-btn" to="/register" >Não possui uma conta?</Link>
        <Link className="navigate-btn" to="#">Esqueceu a senha?</Link>
      </div>
    </AuthPage>
  );
}
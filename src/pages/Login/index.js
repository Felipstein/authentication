import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { Lock, Person } from "@material-ui/icons";

import useInputErrors from '../../hooks/useInputErrors';
import { AuthContext } from "../../contexts/AuthContext";
import AuthPage from "../../components/AuthPage";
import AuthButton from "../../components/AuthButton";
import Input from "../../components/Input";
import isEmailValid from '../../utils/isEmailValid';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { errors, setError, removeError, getMessageByField } = useInputErrors();

  const { authenticated, isLoading, login } = useContext(AuthContext);
  const theme = useTheme();
  const navigate = useNavigate();

  const isFormValid = Boolean(email && password && errors.length === 0);

  useEffect(() => {
    if(authenticated) {
      navigate('/');
    }
  }, [authenticated]);

  function handleEmailInputChange(event) {
    const email = event.target.value;

    setEmail(email);

    if(!email) {
      setError({ field: 'email', message: 'E-mail é obrigatório' });
    } else if(!isEmailValid(email)) {
      setError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeError('email');
    }
  }
  
  function handlePasswordInputChange(event) {
    const password = event.target.value;

    setPassword(password);

    if(!password) {
      setError({ field: 'password', message: 'Senha é obrigatória' });
    } else {
      removeError('password');
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const success = await login(email, password);

    if(success) {
      navigate('/');
    }
  }

  return (
    <AuthPage title="Faça login em sua conta" onSubmit={handleSubmit} >
      <div className="inputs">
        <Input
          value={email}
          type="email"
          placeholder="Email"
          onChange={handleEmailInputChange}
          error={getMessageByField("email")}
          >
          <Person style={{ color: theme.colors.primary.background }} />
        </Input>
        <Input
          value={password}
          type="password"
          placeholder="Senha"
          onChange={handlePasswordInputChange}
          error={getMessageByField("password")}
        >
          <Lock style={{ color: theme.colors.primary.background }} />
        </Input>
      </div>
      <div className="actions">
        <AuthButton type="submit" disabled={!isFormValid} loading={isLoading}>Logar</AuthButton>
        <Link className="navigate-btn" to="/register" >Não possui uma conta?</Link>
        <Link className="navigate-btn" to="#">Esqueceu a senha?</Link>
      </div>
    </AuthPage>
  );
}
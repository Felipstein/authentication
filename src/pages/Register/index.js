import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { Face, Lock, Person } from "@material-ui/icons";

import api from "../../api";
import isEmailValid from '../../utils/isEmailValid';
import { AuthContext } from "../../contexts/AuthContext";
import AuthPage from "../../components/AuthPage";
import AuthButton from "../../components/AuthButton";
import Input from "../../components/Input";
import useInputErrors from "../../hooks/useInputErrors";
import toast from "../../utils/toast";
import delay from "../../utils/delay";

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { errors, setError, removeError, getMessageByField } = useInputErrors();
  const { register, isLoading, } = useContext(AuthContext);

  const theme = useTheme();
  const { authenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  // const isFormValid = Boolean(name && email && password && confirmPassword && errors.length === 0);
  const isFormValid = true;

  useEffect(() => {
    if(authenticated) {
      navigate('/');
    }
  }, []);

  function handleNameChange(event) {
    const name = event.target.value;
    setName(name);

    if(!name) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  }
  
  function handleEmailChange(event) {
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
  
  function handlePasswordChange(event) {
    const password = event.target.value;
    setPassword(password);

    if(!password) {
      setError({ field: 'password', message: 'Senha é obrigatório' });
    } else if(password.length < 3) {
      setError({ field: 'password', message: 'Senha deve ser maior que 3 caracteres' });
    } else {
      removeError('password');
    }
  }
  function handleConfirmPasswordChange(event) {
    const confirmPassword = event.target.value;
    setConfirmPassword(confirmPassword);

    if(!confirmPassword) {
      setError({ field: 'confirmPassword', message: 'Senha é obrigatório' });
    } else if(password !== confirmPassword) {
      setError({ field: 'confirmPassword', message: 'As senhas não coincidem' });
    } else {
      removeError('confirmPassword');
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const success = await register(name, email, password, confirmPassword);

    if(success) {
      navigate('/');
    }
  }

  return (
    <AuthPage title="Cadastre uma conta" side="left" onSubmit={handleSubmit}>
      <div className="inputs">
        <Input
          value={name}
          type="text"
          placeholder="Nome"
          onChange={handleNameChange}
          error={getMessageByField('name')}
          >
          <Face style={{ color: theme.colors.primary.background }} />
        </Input>
        <Input
          value={email}
          type="email"
          placeholder="Email"
          onChange={handleEmailChange}
          error={getMessageByField('email')}
          >
          <Person style={{ color: theme.colors.primary.background }} />
        </Input> 
        <Input
          value={password}
          type="password"
          placeholder="Senha"
          onChange={handlePasswordChange}
          error={getMessageByField('password')}
          >
          <Lock style={{ color: theme.colors.primary.background }} />
        </Input>
        <Input
          value={confirmPassword}
          type="password" 
          placeholder="Confirmar Senha"
          onChange={handleConfirmPasswordChange}
          error={getMessageByField('confirmPassword')}
        >
          <Lock style={{ color: theme.colors.primary.background }} />
        </Input>
      </div>
      <div className="actions">
        <AuthButton type="submit" disabled={!isFormValid} loading={isLoading} side="left">Registrar</AuthButton>
        <Link className="navigate-btn" to="/login">Já possui uma conta?</Link>
      </div>
    </AuthPage>
  );
}
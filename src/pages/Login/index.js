import AuthPage from "../../components/AuthPage";
import AuthButton from "../../components/AuthButton";

export default function Register() {
  return (
    <AuthPage title="Faça login em sua conta" >
      <div className="inputs">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
      </div>
      <div className="actions">
        <AuthButton type="submit">Logar</AuthButton>
        <button className="second-btn" type="button">Não possui uma conta?</button>
        <button className="second-btn" type="button">Esqueceu a senha?</button>
      </div>
    </AuthPage>
  );
}
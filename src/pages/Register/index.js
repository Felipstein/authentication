import AuthPage from "../../components/AuthPage";
import AuthButton from "../../components/AuthButton";

export default function Register() {
  return (
    <AuthPage title="Cadastre uma conta" side="left" >
      <div className="inputs">
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirmar Senha" />
      </div>
      <div className="actions">
        <AuthButton type="submit" side="left">Registrar</AuthButton>
        <button className="second-btn" type="button">Já possui uma conta?</button>
      </div>
    </AuthPage>
  );
}
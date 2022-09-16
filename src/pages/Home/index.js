import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import api from "../../api";
import { AuthContext } from "../../contexts/AuthContext";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { logout } = useContext(AuthContext);

  useEffect(() => {
    (async function() {
      try {
        setLoading(true);

        const { data } = await api.get('/users');

        setUsers(data);
      } catch (err) {
        setError(err.response.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <h1>Usuários:</h1>
      
      {loading && (
        <h1>Carregando usuários...</h1>
      )}

      {error && (
        <h1>{error}</h1>
      )}

      {!loading && !error && users.map(user => (
        <div key={user.id}>
          <span>ID: {user.id}</span><br />
          <span>Name: {user.name}</span><br />
          <span>Email: {user.email}</span><br />
          <span>Password: {user.password}</span><br />
          <span>Registration Date: {user.registrationDate}</span><br /><br />
        </div>
      ))}

      <button onClick={logout}>Sair</button>
    </>
  );
}
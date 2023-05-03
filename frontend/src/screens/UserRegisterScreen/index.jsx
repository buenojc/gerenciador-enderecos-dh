import { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./userRegisterScreen.css";
import api from "../../api/api";

function UserRegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contador, setContador] = useState(0);

  async function handleSubmit(evt) {
    evt.preventDefault();
    await api.post('/users', {
      name,
      email
    })
    setName('');
    setEmail('');

    alert('Usuário cadastrado')
  }

  return (
    <>
      <Header title="Cadastro de Usuário" />
      <main>
        <form onSubmit={handleSubmit}>
          <label>Nome</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </main>
    </>
  );
}

export default UserRegisterScreen;

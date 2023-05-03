import "./header.css";
import { NavLink } from "react-router-dom";

function Header({ title }) {
  return (
    <header>
      <NavLink to="/">Usuários</NavLink>
      <NavLink to="/registro">Cadastrar usuário</NavLink>
      {/* <a href="#">Cadastrar endereço</a> */}
      <h1>{title}</h1>
    </header>
  );
}

export default Header;

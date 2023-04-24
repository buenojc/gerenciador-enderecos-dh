import Header from "../../components/Header";
import "./userRegisterScreen.css";

function UserRegisterScreen() {
    function handleSubmit(evt) {
        evt.preventDefault();
        console.log("Enviou");
      }
    
      return (
        <>
          <Header title='Cadastro de Usuário' />
          <main>
            <form onSubmit={handleSubmit}>
              <label>Nome</label>
              <input type="text" />
    
              <label>Email</label>
              <input type="email" />
    
              <button type="submit">Cadastrar</button>
            </form>
          </main>
        </>
      );
}


export default  UserRegisterScreen
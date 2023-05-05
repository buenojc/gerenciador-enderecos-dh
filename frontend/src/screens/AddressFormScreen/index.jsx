import "./addressFormScreen.css";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";

export default function AddressFormScreen() {
  const { userId } = useParams();

  return (
    <>
      <Header title={`Cadastro de endereço do usuário ${userId}`} />
      <main>
        <form>
          <label>CEP</label>
          <input type="text" />

          <label>Logradouro</label>
          <input type="text" />

          <label>Número</label>
          <input type="text" />

          <label>Cidade</label>
          <input type="text" />
        </form>
      </main>
    </>
  );
}

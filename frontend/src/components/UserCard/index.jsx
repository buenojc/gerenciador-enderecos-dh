import "./userCard.css";

function UserCard({ user }) {
  return (
    <div>
      <span>Id: {user.id}</span>
      <span>Nome: {user.name}</span>
      <span>Email: {user.email}</span>
      <span>
        Endereços:{" "}
        <button>Adicionar</button>
        {user.addresses.map((address) => {
          return (
          <div className='addressWrapper' key={1}>
            <span>CEP: {address.postal_code}</span>
            <span>{address.street}</span>
            <span>{address.house_number}</span>
            <span>{address.city}</span>
          </div>
          );
        })}
      </span>
    </div>
  );
}

export default UserCard;

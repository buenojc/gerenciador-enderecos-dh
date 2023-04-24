import './userCard.css'

function UserCard({ user }) {
  return (
    <div>
      <span>Id: {user.id}</span>
      <span>Nome: {user.name}</span>
      <span>Email: {user.email}</span>
    </div>
  );
}

export default UserCard
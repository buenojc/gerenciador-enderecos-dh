import "./usersScreen.css";
import Header from "../../components/Header";
import UserCard from "../../components/UserCard";

function usersScreen() {
  const users = [
    {
      id: 1,
      name: "Julio Cesar",
      email: "email@email.com",
    },
    {
      id: 2,
      name: "Carlos",
      email: "email@email.com",
    },
    {
      id: 1,
      name: "José",
      email: "email@email.com",
    },
  ];

  return (
    <>
      <Header title="Usuários cadastrados" />
      <main>
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </main>
    </>
  );
}

export default usersScreen;

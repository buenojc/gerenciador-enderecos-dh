import { useEffect, useState } from "react";
import "./usersScreen.css";
import Header from "../../components/Header";
import UserCard from "../../components/UserCard";
import api from "../../api/api";

function UsersScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/users");
      setUsers(data);
    }
    getUsers();
  }, []);

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

export default UsersScreen;

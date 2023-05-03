import NotFoundScreen from "./screens/NotFoundScreen";
import UserRegisterScreen from "./screens/UserRegisterScreen";
import UsersScreen from "./screens/UsersScreen";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<UsersScreen />} path="/" />
      <Route element={<UserRegisterScreen />} path="/registro" />
      <Route element={<NotFoundScreen />} path="*" />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Detail from "./pages/Detail";
import Mypage from "./pages/Mypage";
import Posting from "./pages/Posting";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/posting" element={<Posting />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/mypage" element={<Mypage />} />
    </Routes>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import MyPayments from "./pages/MyPayments";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Students from "./pages/Students";

const Menu =() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="account" element={<MyAccount />} />
          <Route path="students" element={<Students />} />
          <Route path="payments" element={<MyPayments />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp/>} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Menu;

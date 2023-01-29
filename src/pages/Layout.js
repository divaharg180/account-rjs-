import { Outlet,Link } from "react-router-dom";
import "./laystyle.css";


const Layout = () => {
  return (
    <>
      <div className="topbar">
        <ul>
          <li>
           <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/account">MyAccount</Link>
          </li>
          <li>
            <Link to="/history">MyHistory</Link>
          </li>
          <li>
            <Link to="/payments">MyPayments</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  )
};

export default Layout;
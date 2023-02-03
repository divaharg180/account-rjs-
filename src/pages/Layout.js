import { Outlet,Link } from "react-router-dom";
import "./laystyle.css";


const Layout = () => {
  return (
    <div>
    <h1>adharshvidhyalaya@gmail.com</h1><h2 id="phone">04256-256216,316,516 </h2>
    <img alt="img1" id="logo" src="https://static.wixstatic.com/media/d67adb_875428743d55443e86f22ee00828ad30~mv2.png/v1/fill/w_114,h_113,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/adhrash-logo.png"></img>
    <h4><span id="span">ADHARSH VIDHYALAYA</span><br></br>
    <span id="span2">EDUCATIONAL INSTITUTIONS</span></h4>

      <div className="topbar">
        <ul>
          <li>
           <Link id="bar" to="/">Home</Link>
          </li>
          <li>
            <Link id="bar" to="/account">MyAccount</Link>
          </li>
          <li>
            <Link id="bar" to="/history">MyHistory</Link>
          </li>
          <li>
            <Link id="bar" to="/payments">MyPayments</Link>
          </li>
          <li>
            <Link id="bar" to="/login">Login</Link>
          </li>
          <li>
            <Link id="bar" to="/signup">SignUp</Link>
          </li>
        </ul>
        <div id="scroll">
        <h3>Admission Open! Session 2022-23! "Littlewits" one of the best fun leaning schools for your child skill development and experience child growth and innovation</h3>
        </div>
      </div>

      <Outlet />
    </div>
  )
};

export default Layout;
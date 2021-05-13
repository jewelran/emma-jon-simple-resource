import logo from "../../images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../App";
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext)
  
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/review">Order review</Link>
        <Link to="/inventory">Manage inventory here</Link>
        <button style ={{backgroundColor: "goldenrod",padding: '10px 20px', borderRadius: "10px", border: "none",fontWeight: "bold",cursor: 'pointer'}} onClick = {() => setLoggedInUser({})}>Log out</button>
        <div className="search_box">
          <input type="text" />
        </div>
      </nav>
    </div>
  );
};

export default Header;

import logo from "../../images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/review">Order review</Link>
        <Link to="/inventory">Manage inventory here</Link>
        <div className="search_box">
          <input type="text" />
        </div>
      </nav>
    </div>
  );
};

export default Header;

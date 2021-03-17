import logo from "../../images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Order review</a>
        <a href="/manage">Manage inventory here</a>
        <div className="search_box">
          <input type="text" />
        </div>
      </nav>
    </div>
  );
};

export default Header;

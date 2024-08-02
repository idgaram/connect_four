import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <header>
      <nav>
        <button type="button">MENU</button>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <button type="button">RESTART</button>
      </nav>
    </header>
  );
}

import { Link } from "react-router-dom";

//img
import logo from "../../imgs/costs_logo.png";
import HeaderStyle from "../../styles/HeaderStyle";

export function Navbar() {
  return (
    <HeaderStyle>
      <Link to="/">
        <img src={logo} alt="Costs" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projetos</Link>
        </li>
        <li>
          <Link to="/company">Empresa</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
    </HeaderStyle>
  );
}

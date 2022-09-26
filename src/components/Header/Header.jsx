import { useState } from "react";
import { Link } from "react-router-dom";

//img
import logo from "../../imgs/valorant.png";
import { HeaderStyle, NavMenu } from "./style";

// Header components
import { OpenMenuButton } from "./components/OpenMenuButton";

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <HeaderStyle>
      <div className="centralizer">
        <Link to="/">
          <img src={logo} width="60px" alt="Valorant" />
        </Link>
        <NavMenu menuIsOpen={menuIsOpen}>
          <ul>
            <li onClick={() => setMenuIsOpen(false)}>
              <Link to="/">LOUD</Link>
            </li>
            <li onClick={() => setMenuIsOpen(false)}>
              <Link to="/streamers">Streamers</Link>
            </li>
            <li onClick={() => setMenuIsOpen(false)}>
              <Link to="/mirastroll">Miras Troll</Link>
            </li>
          </ul>
        </NavMenu>
        <OpenMenuButton useMenu={[menuIsOpen, setMenuIsOpen]} />
      </div>
    </HeaderStyle>
  );
};

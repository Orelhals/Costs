import { MenuMobileStyles } from "./styles";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export function MenuMobile({ useMenu }) {
  const [menuIsOpen, setMenuIsOpen] = useMenu;

  return (
    <MenuMobileStyles isOpen={menuIsOpen}>
      <IoClose size={45} onClick={() => setMenuIsOpen(false)} />
      <ul>
        <li>
          <Link to="/">LOUD</Link>
        </li>
        <li>
          <Link to="/projects">Streamers</Link>
        </li>
        <li>
          <Link to="/company">Miras Troll</Link>
        </li>
      </ul>
    </MenuMobileStyles>
  );
}

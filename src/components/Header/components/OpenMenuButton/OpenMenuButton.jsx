// style
import { OpenMenuButtonContent } from "./style";

export const OpenMenuButton = ({ useMenu }) => {
  const [menuIsOpen, setMenuIsOpen] = useMenu;

  const closeMenu = () => {
    setMenuIsOpen((menuIsOpen) => {
      return !menuIsOpen;
    });
  };

  return (
    <OpenMenuButtonContent menuIsOpen={menuIsOpen} onClick={closeMenu}>
      <span></span>
    </OpenMenuButtonContent>
  );
};

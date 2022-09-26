import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FooterStyle } from "./style";

export function Footer() {
  return (
    <FooterStyle>
      <div className="centralizer">
        <ul>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
        <p>
          <span>Vavá miras</span> &copy; 2022
        </p>
      </div>
    </FooterStyle>
  );
}

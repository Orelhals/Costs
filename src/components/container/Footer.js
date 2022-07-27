import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import FooterStyle from "../../styles/FooterStyle";

export function Footer() {
  return (
    <FooterStyle>
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
        <span>Costs</span> &copy; 2022
      </p>
    </FooterStyle>
  );
}

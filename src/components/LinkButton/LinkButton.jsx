import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkButtonContainer = styled.button`
  border: none;
  background-color: #222;
  padding: 10px 18px 10px 18px;
  border-radius: 4px;
  font-size: 15px;
  margin-top: 2em;

  > a {
    text-decoration: none;
    color: white;
    transition: 0.5s;
  }

  > a:hover {
    color: #ffbb33;
  }
`;

export function RotaLinkButton({ to, text }) {
  return <Link to={to}>{text}</Link>;
}

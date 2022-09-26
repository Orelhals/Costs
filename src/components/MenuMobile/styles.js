import styled from "styled-components";

export const MenuMobileStyles = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #2f322f;
  transform: ${({ isOpen }) => (isOpen ? "" : "translateX(100%)")};
  transition: 0.3s;
  > svg {
    color: white;
    position: absolute;
    top: 14px;
    right: 14px;
  }

  > ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 70px;
  }

  > ul li a {
    background-color: white;
    padding: 18px;
    border-radius: 24px;
    text-decoration: none;
    color: black;
    box-shadow: 4px 6px black;
    font-size: 14px;
  }
`;

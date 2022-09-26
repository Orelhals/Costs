import styled from "styled-components";

export const OpenMenuButtonContent = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }

  @media (min-width: 800px) {
    display: none;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 4px;
    background: whitesmoke;
    transform: ${({ menuIsOpen }) => (menuIsOpen ? "rotate(45deg)" : "")};
    border-radius: 10px;
    transition: 0.3s;

    ::before,
    ::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background: whitesmoke;
      border-radius: 10px;
      transform: ${({ menuIsOpen }) => (menuIsOpen ? "rotate(-90deg)" : "")};
      transition: 0.3s;
    }
    ::before {
      top: ${({ menuIsOpen }) => (menuIsOpen ? "0px" : "10px")};
    }
    ::after {
      top: ${({ menuIsOpen }) => (menuIsOpen ? "0px" : "-10px")};
    }
  }
`;

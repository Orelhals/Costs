import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #222;
  z-index: 1000;
  .centralizer {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 1em;
    flex-wrap: wrap;

    /* @media (max-width: 695px) {
      height: 100%;
      > ul li a {
        font-size: 10px;
        padding: 6px 12px 6px 12px;
      }
    }

    @media (max-width: 550px) {
      > a img {
        width: 15%;
        margin: 0px;
      }
    } */
  }
`;

export const NavMenu = styled.nav`
  > ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  > ul li a {
    color: black;
    text-decoration: none;
    background-color: #efefef;
    padding: 8px 14px 8px 14px;
    border-radius: 4px;
    font-size: 14px;
  }

  > ul li a:hover {
    background-color: #fa4454;
    transition: 0.8s;
  }
  @media (max-width: 800px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #222;
    padding: 20px;
    transform: ${({ menuIsOpen }) =>
      menuIsOpen ? "translateX(0)" : "translateX(100%)"};
    transition: 0.3s;
    ul {
      height: 100%;
      flex-direction: column;
      justify-content: center;
      gap: 50px;
    }
  }
`;

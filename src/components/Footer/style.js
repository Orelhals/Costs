import styled from "styled-components";

export const FooterStyle = styled.div`
  width: 100%;
  background-color: #222;
  .centralizer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3em;
    margin-top: 50px;
    flex-direction: column;

    > ul {
      margin-bottom: 20px;
      color: white;
      display: flex;
      gap: 10px;
      list-style: none;
      text-align: center;
    }

    > ul li:hover {
      color: #ffbb33;
    }

    > ul li {
      font-size: 20px;
    }

    > p span {
      color: #ffbb33;
      font-size: 14px;
    }

    > p {
      color: white;
      font-size: 14px;
    }

    @media (max-width: 320px) {
      > p {
        font-size: 10px;
      }

      > p span {
        font-size: 10px;
      }
    }
  }
`;

import styled from "styled-components";

const FooterStyle = styled.div`
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3em;
  width: 100%;
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
    font-size: 25px;
  }

  > p span {
    color: #ffbb33;
  }

  > p {
    color: white;
  }
`;

export default FooterStyle;

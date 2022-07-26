import styled from "styled-components";

const HeaderStyle = styled.div`
  background-color: #222;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1em;
  flex-wrap: wrap;

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
    padding: 2px 12px 2px 12px;
    border-radius: 4px;
  }

  > ul li a:hover {
    background-color: #ffbb33;
  }
`;

export default HeaderStyle;

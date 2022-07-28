import styled from "styled-components";
import Savings from "../../imgs/savings.svg";

export function Home() {
  return (
    <HomeStyles>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo! </p>
      <CriarButton>Criar Projeto</CriarButton>
      <img src={Savings} alt="Costs" />
    </HomeStyles>
  );
}

// Styles

const HomeStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em;

  > h1 {
    font-size: 2.5em;
    margin-bottom: 0.5em;
  }

  > h1 span {
    color: #ffbb33;
    background-color: #2f2f2f;
    border-radius: 16px;
    padding: 0 0.2em;
  }

  > p {
    margin-bottom: 0.5em;
    color: #7b7b7b;
  }

  img {
    width: 350px;
    margin: 2em;
  }
`;
const CriarButton = styled.button`
  border: none;
  background-color: #ffbb33;
  padding: 10px 18px 10px 18px;
  border-radius: 4px;
  font-size: 15px;
`;

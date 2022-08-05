import styled from "styled-components";
import { ProjectForm } from "../project/ProjectForm";

const NewProjectContainer = styled.div`
  margin: 0 auto;
  width: 450px;

  > h1 {
    margin-bottom: 0.5em;
    margin-top: 1em;
  }

  > p {
    color: #7b7b7b;
  }
`;

export function NewProject() {
  return (
    <NewProjectContainer>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm />
    </NewProjectContainer>
  );
}

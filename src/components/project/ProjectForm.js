import styled from "styled-components";
import { Input } from "../form-components/Input";
import { Select } from "../form-components/Select";

const FormStyles = styled.div`
  width: 100%;
  margin: 2em 0;
`;

export function ProjectForm() {
  return (
    <FormStyles>
      <form>
        <Input
          type="text"
          text="Nome do projeto"
          name="name"
          placeholder="Insira o nome do projeto"
        />
        <Input
          type="number"
          text="Orçamento do projeto"
          name="budget"
          placeholder="Insira o orçamento do projeto"
        />
        <Select name="category_id" text="Selecione a categoria" />
        <div>
          <input type="submit" value="Criar Projeto" />
        </div>
      </form>
    </FormStyles>
  );
}

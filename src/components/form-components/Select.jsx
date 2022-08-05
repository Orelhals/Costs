import styled from "styled-components";

const SelectStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  > label {
    font-weight: bold;
    margin-bottom: 0.6em;
  }

  > select {
    padding: 0.7em;
    color: #7b7b7b;
    border-radius: 0;
  }
`;

export function Select({
  options,
  text,
  name,
  placeholder,
  handleOnChange,
  value
}) {
  return (
    <SelectStyles>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name}>
        <option>Selecione a opção</option>
      </select>
    </SelectStyles>
  );
}

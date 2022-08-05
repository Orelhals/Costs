import styled from "styled-components";

const InputStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  > label {
    font-weight: bold;
    margin-bottom: 0.6em;
  }

  > input {
    border: none;
    border-radius: 0;
    margin-bottom: 0.7em;
    padding: 10px;
  }

  > input::placeholder {
    color: #7b7b7b;
  }
`;

export function Input({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value
}) {
  return (
    <InputStyles>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </InputStyles>
  );
}

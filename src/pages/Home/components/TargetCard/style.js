import styled from "styled-components";

export const TargetCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid #f7f7f7;
  align-items: center;
  width: 100%;
  padding: 15px;
  gap: 10px;
  font-size: 10px;
  box-shadow: 4px 6px black;
  background-color: black;

  :hover {
    transform: scale(1.1);
    transition: 0.5s;
    color: #fa4454;
  }

  > h3 {
    font-weight: 400;
    text-align: left;
  }

  p {
    flex: 1 1 100%;
    max-width: 100%;
    overflow-wrap: break-word;
    line-height: 20px;
  }

  @media (max-width: 320px) {
    > padding: {
      overflow-wrap: break-word;
    }
    width: 80%;
  }

  > button {
    padding: 7px;
    border-radius: 15px;
    border: none;
    max-width: 100px;
    cursor: pointer;
    font-size: 12px;
    box-shadow: 4px 6px black;

    :hover {
      background-color: #fa4454;
      transition: 0.5s;
      color: black;
    }
  }
`;

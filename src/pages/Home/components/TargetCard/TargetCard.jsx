// style
import { TargetCardContainer } from "./style";

export const TargetCard = ({ target }) => {
  return (
    <TargetCardContainer>
      <h3>{target?.name}</h3>
      <p>{target?.value}</p>
      <button className="copy-btn">Copiar Mira</button>
    </TargetCardContainer>
  );
};

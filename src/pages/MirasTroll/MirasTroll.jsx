// data
import { trollList } from "../../data/trollList";

// Home components
import { TargetCard } from "../../pages/Home/components/TargetCard";

//styles
import { TrollStyles } from "./styles";

export function MirasTroll() {
  return (
    <TrollStyles>
      <div className="centralizer">
        <h3>Miras Troll</h3>
        {trollList.map((target, index) => (
          <TargetCard target={target} key={target.name + index} />
        ))}
      </div>
    </TrollStyles>
  );
}

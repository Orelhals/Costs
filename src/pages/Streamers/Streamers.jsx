// data
import { streamerstList } from "../../data/streamersList";

// Home components
import { TargetCard } from "../../pages/Home/components";

//styles
import { StreamersStyles } from "./style";

export function Streamers() {
  return (
    <StreamersStyles>
      <div className="centralizer">
        <h3>Miras dos Streamers</h3>
        {streamerstList.map((target, index) => (
          <TargetCard target={target} key={target.name + index} />
        ))}
      </div>
    </StreamersStyles>
  );
}

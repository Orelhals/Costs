import logo from "../../imgs/loud-logo.png";

// data
import { loudList } from "../../data/loudList";

// style
import { CardStyles } from "./style";

// Home components
import { TargetCard } from "./components";

export function Home() {
  return (
    <CardStyles className="page-container">
      <div className="centralizer">
        <img src={logo} alt="logo-loud" />
        {loudList.map((target, index) => (
          <TargetCard target={target} key={target.name + index} />
        ))}
      </div>
    </CardStyles>
  );
}

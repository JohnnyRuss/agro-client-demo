import { generateArray } from "@/utils";

import * as Styled from "./styles/yourCombos.styled";
import ComboCard from "./components/ComboCard";

const YourCombos: React.FC = () => {
  return (
    <Styled.YourCombos>
      <div className="combos-list">
        {generateArray(18).map((id) => (
          <ComboCard key={id} />
        ))}
      </div>
    </Styled.YourCombos>
  );
};

export default YourCombos;

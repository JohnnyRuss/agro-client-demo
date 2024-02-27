import { generateArray } from "@/utils";

import SectionTitle from "./SectionTitle";
import { ProductCard } from "@/components/Layouts";
import * as Styled from "./styles/combosWeSell.styled";

type CombosWeSellT = {};

const CombosWeSell: React.FC<CombosWeSellT> = () => {
  return (
    <Styled.CombosWeSell>
      <SectionTitle subTitle="BUNDLES" title="Bundles" />

      <ul className="products-list">
        {generateArray(6).map((id) => (
          <ProductCard key={id} />
        ))}
      </ul>
    </Styled.CombosWeSell>
  );
};

export default CombosWeSell;

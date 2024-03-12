import { generateArray } from "@/utils";
import { DYNAMIC_ROUTES } from "@/config/paths";

import SectionTitle from "./SectionTitle";
import * as Styled from "./styles/combosWeSell.styled";
import { ComboCard } from "@/components/Layouts";

type CombosWeSellT = {};

const images = [
  "https://images.unsplash.com/photo-1682685797365-6f57bbebffed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1707343848723-bd87dea7b118?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682687221213-56e250b36fdd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709286636205-c419afdf70aa?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const CombosWeSell: React.FC<CombosWeSellT> = () => {
  return (
    <Styled.CombosWeSell>
      <SectionTitle subTitle="BUNDLES" title="Bundles" />

      <ul className="products-list">
        {generateArray(6).map((id) => (
          <ComboCard
            key={id}
            redirectPath={DYNAMIC_ROUTES.combo_page("123")}
            showActions={false}
            combo={{
              _id: "",
              assets: images,
              createdAt: "",
              description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni eum numquam hic repudiandae tempore ea veritatis voluptate beatae, officia quasi corporis, similique aspernatur ducimus qui. Rem sunt odit deserunt, magnam harum laborum culpa nisi, natus eius ab veritatis dignissimos hic mollitia voluptates sequi eos voluptate veniam non totam deleniti excepturi, at amet?",
              price: "30",
              products: [],
              title: "test combo",
            }}
          />
        ))}
      </ul>
    </Styled.CombosWeSell>
  );
};

export default CombosWeSell;

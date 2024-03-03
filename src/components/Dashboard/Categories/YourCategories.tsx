import { useGetCategoriesQuery } from "@/hooks/api/dashboard/categories";
import { useDeleteCategoryQuery } from "@/hooks/api/dashboard/categories";

import { StandSpinner, InfiniteScroll } from "@/components/Layouts";
import CategoryCard from "./components/CategoryCard";
import * as Styled from "./styles/yourCategories.styled";

const YourCategories: React.FC = () => {
  const { data, status, hasMore, total, getPaginatedCategoriesQuery } =
    useGetCategoriesQuery();
  const { deleteCategoryQuery, status: deleteStatus } =
    useDeleteCategoryQuery();

  return (
    <Styled.YourCategories>
      <InfiniteScroll
        total={total}
        hasMore={hasMore}
        onNext={getPaginatedCategoriesQuery}
      >
        {data.map((category) => (
          <CategoryCard
            key={category._id}
            category={category}
            deleteCategoryQuery={deleteCategoryQuery}
          />
        ))}
      </InfiniteScroll>

      {(status.loading || deleteStatus.loading) && <StandSpinner />}
    </Styled.YourCategories>
  );
};

export default YourCategories;

import { useNavigate } from "react-router-dom";
import { Controller } from "react-hook-form";

import { PATHS } from "@/config/paths";
import { useSearchParams } from "@/hooks/utils";
import { useCreateCategoryQuery } from "@/hooks/api/dashboard/categories";

import { TextField, Button } from "@/components/Layouts";
import * as Styled from "./styles/createCategory.styled";
import { ArrowLeftIcon } from "@/components/Layouts/Icons";

const CreateCategory: React.FC = () => {
  const navigate = useNavigate();

  const { form } = useCreateCategoryQuery();
  const { getParam } = useSearchParams();

  const isEditing = getParam("category");

  const onGoBack = () => navigate(PATHS.dashboard_your_categories_page);

  return (
    <Styled.CreateCategory>
      <p className="create-category__title">
        <button onClick={onGoBack}>
          <ArrowLeftIcon />
        </button>

        {isEditing ? "Update Category" : "Create Category"}
      </p>

      <form className="create-category__form">
        <Controller
          control={form.control}
          name="title"
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="Title"
              fieldProps={field}
              hasError={error ? true : false}
              message={error?.message || ""}
            />
          )}
        />

        <Button show="secondary" className="create-category__btn">
          create
        </Button>
      </form>
    </Styled.CreateCategory>
  );
};

export default CreateCategory;

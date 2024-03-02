import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Controller } from "react-hook-form";

import { PATHS } from "@/config/paths";
import { useSearchParams } from "@/hooks/utils";
import { useCreateCategoryQuery } from "@/hooks/api/dashboard/categories";

import { TextField, Button, StandSpinner } from "@/components/Layouts";
import * as Styled from "./styles/createCategory.styled";
import { ArrowLeftIcon } from "@/components/Layouts/Icons";

import { CategoryT } from "@/interface/db/category.types";

const CreateCategory: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { getParam } = useSearchParams();

  const { form, status, onStartUpdate, createCategoryQuery } =
    useCreateCategoryQuery();

  const isEditing = getParam("category");
  const candidateCategory: CategoryT | undefined = state?.category;

  const onGoBack = () => navigate(PATHS.dashboard_your_categories_page);

  useEffect(() => {
    if (isEditing && candidateCategory) onStartUpdate(candidateCategory);
  }, [isEditing, candidateCategory]);

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

        <Button
          show="secondary"
          disabled={status.loading}
          onClick={createCategoryQuery}
          className="create-category__btn"
        >
          {isEditing ? "update" : "create"}
        </Button>
      </form>

      {status.loading && <StandSpinner />}
    </Styled.CreateCategory>
  );
};

export default CreateCategory;

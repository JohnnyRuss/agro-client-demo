import useCategoryForm from "@/utils/validations/dashboard/CategorySchema";

export default function useCreateCategoryQuery() {
  const form = useCategoryForm();

  return { form };
}

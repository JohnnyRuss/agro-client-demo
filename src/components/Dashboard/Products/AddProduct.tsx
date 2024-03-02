import { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Controller } from "react-hook-form";

import { useSearchParams } from "@/hooks/utils";
import { useGetCategoriesQuery } from "@/hooks/api/dashboard/categories";
import { useCreateProductQuery } from "@/hooks/api/dashboard/products";

import {
  Button,
  TextField,
  FileField,
  SelectField,
  TextareaField,
  StandSpinner,
} from "@/components/Layouts";
import { CloseIcon, PlusIcon } from "@/components/Layouts/Icons";
import * as Styled from "./styles/addProduct.styled";

import { ProductT } from "@/interface/db/product.types";

const AddProduct: React.FC = () => {
  const { state } = useLocation();
  const { getParam } = useSearchParams();

  const form = useCreateProductQuery();

  const isEditing = getParam("product");
  const candidateProduct: ProductT | undefined = state?.product;

  useEffect(() => {
    if (isEditing && candidateProduct) form.onStartUpdate(candidateProduct);
  }, [isEditing, candidateProduct]);

  // ========== CATEGORY SUGGESTIONS ==========
  const { data: categories, status: categoriesStatus } =
    useGetCategoriesQuery();

  const categoryOptions = useMemo(
    () => categories.map((c) => ({ title: c.title, value: c._id })),
    [categories]
  );

  return (
    <Styled.AddProduct>
      <form>
        <Controller
          control={form.form.control}
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

        <Controller
          control={form.form.control}
          name="description"
          render={({ field, fieldState: { error } }) => (
            <TextareaField
              rows={4}
              label="Description"
              fieldProps={field}
              hasError={error ? true : false}
              message={error?.message || ""}
            />
          )}
        />

        <Controller
          control={form.form.control}
          name="price"
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="Price"
              fieldProps={field}
              hasError={error ? true : false}
              message={error?.message || ""}
            />
          )}
        />

        <Controller
          name="category"
          control={form.form.control}
          render={({ field }) => (
            <SelectField
              value={field.value}
              placeholder="select category"
              options={categoryOptions}
              loading={categoriesStatus.loading}
              onSelect={(v) => field.onChange(v)}
            />
          )}
        />

        {form.sizesField.fields.map((sizeField, index) => (
          <div
            key={sizeField.id}
            className={`size-field__block ${index === 0 ? "first" : ""}`}
          >
            <Controller
              control={form.form.control}
              name={`sizes.${index}.size`}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  label={index === 0 ? "Size" : ""}
                  placeholder={index > 0 ? "Size" : ""}
                  fieldProps={field}
                  hasError={error ? true : false}
                  message={error?.message || ""}
                />
              )}
            />

            <Controller
              control={form.form.control}
              name={`sizes.${index}.quantity`}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  label={index === 0 ? "Quantity" : ""}
                  placeholder={index > 0 ? "Quantity" : ""}
                  fieldProps={field}
                  hasError={error ? true : false}
                  message={error?.message || ""}
                />
              )}
            />

            {form.sizesField.fields.length > 1 && (
              <button
                className="remove-field__btn"
                onClick={(e) => {
                  e.preventDefault();
                  form.onRemoveSizeField(index);
                }}
              >
                <CloseIcon />
              </button>
            )}
          </div>
        ))}

        <button
          onClick={form.onAppendSizeField}
          className="add-size--field__btn"
        >
          <PlusIcon />
          Append Size Field
        </button>

        <Controller
          control={form.form.control}
          name="assets"
          render={({ field, fieldState: { error } }) => (
            <FileField
              label="Assets"
              multiple={true}
              value={field.value}
              onRemoveFile={form.onRemoveFile}
              message={error?.message || ""}
              anotation="Please Select assets"
              hasError={error ? true : false}
              fieldProps={{ ...field, onChange: form.onFileChange }}
            />
          )}
        />

        <Button onClick={form.onCreateQuery} disabled={form.status.loading}>
          {isEditing ? "update" : "create"}
        </Button>
      </form>

      {form.status.loading && <StandSpinner />}
    </Styled.AddProduct>
  );
};

export default AddProduct;

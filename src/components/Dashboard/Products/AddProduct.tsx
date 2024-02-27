import { Controller } from "react-hook-form";

import { useCreateProductQuery } from "@/hooks/api/dashboard/products";

import {
  Button,
  TextField,
  FileField,
  SelectField,
  TextareaField,
} from "@/components/Layouts";
import { CloseIcon, PlusIcon } from "@/components/Layouts/Icons";
import * as Styled from "./styles/addProduct.styled";

const AddProduct: React.FC = () => {
  const {
    form,
    sizesField,
    onFileChange,
    onRemoveFile,
    onCreateQuery,
    onAppendSizeField,
    onRemoveSizeField,
  } = useCreateProductQuery();

  return (
    <Styled.AddProduct>
      <form>
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

        <Controller
          control={form.control}
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
          control={form.control}
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
          control={form.control}
          render={() => <SelectField />}
        />

        {sizesField.fields.map((sizeField, index) => (
          <div key={sizeField.id} className="size-field__block">
            <Controller
              control={form.control}
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
              control={form.control}
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

            {sizesField.fields.length > 1 && (
              <button
                className="remove-field__btn"
                onClick={(e) => {
                  e.preventDefault();
                  onRemoveSizeField(index);
                }}
              >
                <CloseIcon />
              </button>
            )}
          </div>
        ))}

        <button onClick={onAppendSizeField} className="add-size--field__btn">
          <PlusIcon />
          Append Size Field
        </button>

        <Controller
          control={form.control}
          name="assets"
          render={({ field, fieldState: { error } }) => (
            <FileField
              label="Assets"
              multiple={true}
              onRemoveFile={onRemoveFile}
              message={error?.message || ""}
              anotation="Please Select assets"
              hasError={error ? true : false}
              fieldProps={{ ...field, onChange: onFileChange }}
              value={field.value}
            />
          )}
        />

        <Button onClick={onCreateQuery}>create</Button>
      </form>
    </Styled.AddProduct>
  );
};

export default AddProduct;

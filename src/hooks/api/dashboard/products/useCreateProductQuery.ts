import { useFieldArray } from "react-hook-form";

import FileControl from "@/utils/FileControl";
import { isURL } from "@/utils/validations/helpers/customValidators";
import useProductForm from "@/utils/validations/dashboard/ProductSchema";

export default function useCreateProductQuery() {
  const form = useProductForm();

  const sizesField = useFieldArray({
    name: "sizes",
    control: form.control,
  });

  const onAppendSizeField = (e: React.MouseEvent) => {
    e.preventDefault();
    sizesField.append({ size: "", quantity: "" });
  };

  const onRemoveSizeField = (fieldIndex: number) => {
    if (sizesField.fields.length <= 1) return;
    sizesField.remove(fieldIndex);
  };

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList = (e.target.files as FileList) || [];
    const filesArr = files.length > 0 ? Array.from(files) : [];
    const _64Arr = await Promise.all(
      filesArr.map(
        async (f: File) => await FileControl.convertFileToBase64Str(f)
      )
    );

    form.setValue("assets", _64Arr);
  };

  const onRemoveFile = (src: string) => {
    const currentAssets = form.getValues("assets");

    if (isURL.validator(src)) {
      const currentAssetsToDelete = form.getValues("assets_to_delete");
      form.setValue("assets_to_delete", [...currentAssetsToDelete, src]);
    }

    form.setValue(
      "assets",
      currentAssets.filter((asset) => asset !== src)
    );
  };

  const onCreateQuery = form.handleSubmit((values) => {
    console.log(values);
  });

  return {
    form,
    sizesField,
    onFileChange,
    onRemoveFile,
    onCreateQuery,
    onAppendSizeField,
    onRemoveSizeField,
  };
}

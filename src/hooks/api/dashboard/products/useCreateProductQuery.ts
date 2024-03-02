import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useFieldArray } from "react-hook-form";

import { productStore } from "@/store";
import { isURL } from "@/utils/validations/helpers/customValidators";
import useProductForm from "@/utils/validations/dashboard/ProductSchema";

import { ProductT } from "@/interface/db/product.types";

type SingleFileT = string | File | Blob;

export default function useCreateProductQuery() {
  const form = useProductForm();

  // ========== Control Size Field ==========
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

  // ========== Control File Field ==========
  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentAssets = form.getValues("assets");

    const files: FileList = (e.target.files as FileList) || [];
    const filesArr = files.length > 0 ? Array.from(files) : [];

    form.setValue("assets", [...currentAssets, ...filesArr]);
  };

  const onRemoveFile = (value: SingleFileT) => {
    const currentAssets = form.getValues("assets");

    if (typeof value === "string" && isURL.validator(value)) {
      const currentAssetsToDelete = form.getValues("assets_to_delete");
      form.setValue("assets_to_delete", [...currentAssetsToDelete, value]);

      form.setValue(
        "assets",
        currentAssets.filter((asset) => asset !== value)
      );
    } else if (value instanceof File) {
      form.setValue(
        "assets",
        currentAssets.filter((asset) => asset.name !== value.name)
      );
    }
  };

  // ========== Query ==========
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [candidateProductId, setCandidateProductId] = useState("");

  const status = productStore.use.createStatus();
  const create = productStore.use.createProduct();
  const update = productStore.use.updateProduct();

  const onStartUpdate = (product: ProductT) => {
    form.reset({
      title: product.title,
      description: product.description,
      price: product.price.toString(),
      category: { title: product.category.title, value: product.category._id },
      sizes: product.sizes.map((size) => ({
        quantity: size.quantity.toString(),
        size: size.size,
      })),
      assets: product.assets,
      assets_to_delete: [],
    });

    setCandidateProductId(product._id);
  };

  const onCreateQuery = form.handleSubmit(async (values) => {
    if (candidateProductId) {
      await update(values, { productId: candidateProductId });
      navigate(pathname);
    } else await create(values);

    form.reset();
  });

  return {
    form,
    // ========== Control Size Field ==========
    sizesField,
    onAppendSizeField,
    onRemoveSizeField,
    // ========== Control File Field ==========
    onFileChange,
    onRemoveFile,
    // ========== Query ==========
    status,
    onCreateQuery,
    onStartUpdate,
  };
}

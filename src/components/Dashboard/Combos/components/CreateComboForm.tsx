import { useSearchParams } from "@/hooks/utils";

import { comboStore } from "@/store";

import * as Styled from "./styles/createComboForm.styled";
import { TextField, TextareaField } from "@/components/Layouts";
import { MediaIcon, CloseIcon } from "@/components/Layouts/Icons";

type CreateComboFormT = {};

const CreateComboForm: React.FC<CreateComboFormT> = () => {
  const { setParam } = useSearchParams();

  const newAssets = comboStore.use.newAssets();
  const addNewFiles = comboStore.use.addNewFiles();
  const removeNewFile = comboStore.use.removeNewFile();
  const addedExistingAssets = comboStore.use.existingAssets();

  const onChooseNewAsset = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetFiles: FileList | null = e.target.files;
    const filesArray = targetFiles ? Array.from(targetFiles) : [];

    if (filesArray.length <= 0) return;

    addNewFiles(filesArray);
  };

  const onRemoveNewAsset = (fileIndex: number) => removeNewFile(fileIndex);

  const onStartSelectMedia = () => setParam("media", "1");

  // TODO:
  // 1. handle form fields

  return (
    <Styled.CreateComboForm className="create-combo__form-box">
      <TextField
        label="სათაური"
        fieldProps={{ name: "title", onChange: () => {}, value: "" }}
        hasError={false}
        message=""
      />

      <TextareaField
        label="აღწერა"
        fieldProps={{ name: "title", onChange: () => {}, value: "" }}
        hasError={false}
        message=""
        rows={6}
      />

      <TextField
        label="ფასი"
        fieldProps={{ name: "title", onChange: () => {}, value: "" }}
        hasError={false}
        message=""
      />

      {addedExistingAssets.length > 0 && (
        <div className="chosen-existing--assets__review">
          {addedExistingAssets.slice(0, 5).map((asset, index) => (
            <figure key={asset}>
              <img
                src={asset}
                alt={asset}
                title={asset}
                loading="eager"
                width={50}
              />
              {addedExistingAssets.length > 5 && index === 4 && (
                <span>+{addedExistingAssets.length - 5}</span>
              )}
            </figure>
          ))}
        </div>
      )}

      <button
        className="create-combo__form-btn media"
        onClick={onStartSelectMedia}
      >
        აირჩიე მედია ფაილები არსებულიდან
        <MediaIcon />
      </button>

      {newAssets.length > 0 && (
        <div className="chosen-existing--assets__review">
          {newAssets.slice(0, 5).map((asset, index) => (
            <figure key={`new-asset--${index}`}>
              <img
                src={URL.createObjectURL(asset)}
                alt="new asset"
                title="new asset"
                loading="eager"
                width={50}
              />

              {addedExistingAssets.length > 5 && index === 4 && (
                <span>+{addedExistingAssets.length - 5}</span>
              )}

              <button onClick={() => onRemoveNewAsset(index)}>
                <CloseIcon />
              </button>
            </figure>
          ))}
        </div>
      )}

      <label htmlFor="combo-file" className="media create-combo__form-btn">
        დაამატე ახალი მედია ფაილი
        <MediaIcon />
        <input
          type="file"
          accept="image/*"
          hidden={true}
          id="combo-file"
          multiple={true}
          onChange={onChooseNewAsset}
        />
      </label>

      <button className="create-combo__form-btn publish">გამოქვეყნება</button>
    </Styled.CreateComboForm>
  );
};

export default CreateComboForm;

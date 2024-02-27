import { useRef } from "react";

import { CloseIcon } from "@/components/Layouts/Icons";
import * as Styled from "./form.styled";

import { HookFormFileFieldT } from "@/interface/form.types";

type FileFieldT = {
  label: string;
  anotation: string;
  hasError?: boolean;
  message: string;
  multiple?: boolean;
  accept?: string;
  fieldProps: HookFormFileFieldT;
  value: string | string[];
  onRemoveFile: (src: string) => void;
};

const FileField: React.FC<FileFieldT> = (props) => {
  const fileRef = useRef<HTMLInputElement | null>(null);

  return (
    <Styled.FileField data-input-file>
      {((Array.isArray(props.value) && props.value[0]) ||
        (!Array.isArray(props.value) && props.value)) && (
        <InputFileFrame
          value={props.value}
          multiple={props.multiple || false}
          onRemoveFile={props.onRemoveFile}
        />
      )}

      <label htmlFor="form-file--upload" className="form__input-file--label">
        {props.label ? props.label : "აირჩიეთ ფაილი"}
      </label>

      <input
        hidden
        type="file"
        ref={fileRef}
        accept={props.accept}
        multiple={props.multiple}
        id="form-file--upload"
        // {...fieldProps}
        onChange={props.fieldProps.onChange}
      />

      {props.anotation && (
        <label className="anotation-label" htmlFor="form-file--upload">
          {props.anotation}
        </label>
      )}

      {props.hasError && <p>{props.message}</p>}
    </Styled.FileField>
  );
};

export default FileField;

type InputFileFrameT = {
  multiple: boolean;
  value: string | Array<string>;
  onRemoveFile: (src: string) => void;
};

function InputFileFrame({ multiple, value, onRemoveFile }: InputFileFrameT) {
  return (
    <div
      className={`chosen-assets__review-box ${
        multiple ? "multiple" : "single"
      }`}
    >
      {multiple ? (
        (value as Array<string>)
          .slice(0, 10)
          .map((url: string, index: number) => (
            <AssetFigure
              key={url}
              url={url}
              index={index}
              assetsCount={value.length}
              onRemoveFile={onRemoveFile}
            />
          ))
      ) : (
        <figure className="form__file-icon--review__fig">
          <img src={value as string} alt="media" />
        </figure>
      )}
    </div>
  );
}

type AssetFigureT = {
  url: string;
  index: number;
  assetsCount: number;
  onRemoveFile: (src: string) => void;
};

function AssetFigure({ url, index, assetsCount, onRemoveFile }: AssetFigureT) {
  const onHandleRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    onRemoveFile && onRemoveFile(url);
  };

  return (
    <figure className="chosen-assets__review-box--fig" key={`file-${index}`}>
      <img src={url} alt="" />

      <button
        className={`remove-asset--btn ${
          assetsCount > 10 && index === 9 ? "hide-remove" : ""
        }`}
        onClick={onHandleRemove}
      >
        <CloseIcon />
      </button>

      {assetsCount > 10 && index === 9 && (
        <span className="extra-assets__layout">+{assetsCount - 10}</span>
      )}
    </figure>
  );
}

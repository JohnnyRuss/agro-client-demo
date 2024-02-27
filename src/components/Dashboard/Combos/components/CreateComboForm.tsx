import { useSearchParams } from "@/hooks/utils";

import * as Styled from "./styles/createComboForm.styled";
import { MediaIcon } from "@/components/Layouts/Icons";
import { TextField, TextareaField } from "@/components/Layouts";

type CreateComboFormT = {};

const CreateComboForm: React.FC<CreateComboFormT> = () => {
  const { setParam } = useSearchParams();

  const onStartSelectMedia = () => setParam("media", "1");

  return (
    <Styled.CreateComboForm className="create-combo__form-box">
      <TextField
        label="Title"
        fieldProps={{ name: "title", onChange: () => {}, value: "" }}
        hasError={false}
        message=""
      />

      <TextareaField
        label="Description"
        fieldProps={{ name: "title", onChange: () => {}, value: "" }}
        hasError={false}
        message=""
        rows={6}
      />

      <TextField
        label="Price"
        fieldProps={{ name: "title", onChange: () => {}, value: "" }}
        hasError={false}
        message=""
      />

      <button className="media" onClick={onStartSelectMedia}>
        Select Thumbnails
        <MediaIcon />
      </button>

      <button className="publish">Publish</button>
    </Styled.CreateComboForm>
  );
};

export default CreateComboForm;

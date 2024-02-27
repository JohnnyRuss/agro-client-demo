import { useSearchParams } from "@/hooks/utils";

import { Modal } from "@/components/Layouts";
import { PublishIcon } from "@/components/Layouts/Icons";
import * as Styled from "./styles/createCombo.styled";
import * as UI from "./components";

const CreateCombo: React.FC = () => {
  const { getParam, setParam, removeParam } = useSearchParams();

  const isSelectingMedia = getParam("media") === "1";
  const isPublishing = getParam("publish") === "1";

  const onOpenComboModal = () => setParam("publish", "1");
  const onCloseComboModal = () => removeParam("publish");

  return (
    <>
      <Styled.CreateCombo>
        <UI.ItemToChooseRow />

        <UI.AddedItemsRow />

        <UI.ComboActiveItem />

        <button onClick={onOpenComboModal} className="combo-modal__toggle-btn">
          <PublishIcon />
        </button>
      </Styled.CreateCombo>

      <Modal open={isPublishing} onClose={onCloseComboModal}>
        <Styled.CreateComboModal>
          {isSelectingMedia ? <UI.ChooseThumbnails /> : <UI.CreateComboForm />}
        </Styled.CreateComboModal>
      </Modal>
    </>
  );
};

export default CreateCombo;

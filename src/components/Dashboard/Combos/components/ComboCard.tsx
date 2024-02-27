import { useNavigate } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useAppUIContext } from "@/Providers/useProviders";

import * as Styled from "./styles/comboCard.styled";
import { LineClamp, Button } from "@/components/Layouts";
import { DeleteIcon, EditIcon } from "@/components/Layouts/Icons";

const images = [
  "https://images.unsplash.com/photo-1632723893457-47e3abc47526?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1595787572976-f6fb4ee44005?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1625758474222-92183cb2c02c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1633375011368-b3d9b70ceef8?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1581177094826-3b9a100bf887?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1527454803819-fd7364ac2c83?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

type ComboCardT = {};

const ComboCard: React.FC<ComboCardT> = () => {
  const navigate = useNavigate();

  const { activateDialog } = useAppUIContext();

  const onEdit = () =>
    navigate(`${PATHS.dashboard_create_combo_page}?category=${"1234"}`);

  const onStartDelete = () =>
    activateDialog({
      target: "<COMBO>",
      message: "Are you sure you want to delete this Bundle ?",
      onConfirm: () => {},
      title: "Delete Bundle",
      type: "danger",
    });

  return (
    <Styled.ComboCard className="combos-list__item">
      <div className="combo-assets">
        {images.map((src) => (
          <img key={src} src={src} alt="" title="" loading="lazy" />
        ))}
      </div>

      <div className="combo-details">
        <LineClamp
          clamp={2}
          component="h4"
          text="Combo title with big text very big text something about ten words"
        />

        <LineClamp
          clamp={4}
          component="div"
          text="Combo description with big text very big text something about twenty words so i am gonna drop couple of words"
        />

        <div className="combo-details--duplex">
          <div>
            <span>price:</span>
            &nbsp;
            <span>100</span>
          </div>

          <div>
            <span>products variety:</span>
            &nbsp;
            <span>5</span>
          </div>
        </div>

        <div className="combo-details--duplex">
          <Button show="danger" onClick={onStartDelete}>
            <DeleteIcon />
            delete
          </Button>

          <Button onClick={onEdit}>
            <EditIcon />
            update
          </Button>
        </div>
      </div>
    </Styled.ComboCard>
  );
};

export default ComboCard;

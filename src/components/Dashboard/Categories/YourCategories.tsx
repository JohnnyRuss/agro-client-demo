import { useNavigate } from "react-router-dom";

import { generateArray } from "@/utils";
import { PATHS } from "@/config/paths";
import { useAppUIContext } from "@/Providers/useProviders";

import { Button } from "@/components/Layouts";
import * as Styled from "./styles/yourCategories.styled";
import { DeleteIcon, EditIcon } from "@/components/Layouts/Icons";

const YourCategories: React.FC = () => {
  const navigate = useNavigate();

  const { activateDialog } = useAppUIContext();

  const onEdit = (categoryId: string) =>
    navigate(`${PATHS.dashboard_create_category_page}?category=${categoryId}`);

  const onStartDelete = () =>
    activateDialog({
      target: "<CATEGORY>",
      message: "Are you sure you want to delete this category ?",
      onConfirm: () => {},
      title: "Delete Category",
      type: "danger",
    });

  return (
    <Styled.YourCategories>
      {generateArray(12).map((id) => (
        <li key={id} className="category-item">
          <p>მუხლი</p>

          <div className="category-item__actions">
            <Button onClick={onStartDelete} show="danger" fillType="outlined">
              <DeleteIcon />
            </Button>

            <Button onClick={() => onEdit(id)} fillType="outlined">
              <EditIcon />
            </Button>
          </div>
        </li>
      ))}
    </Styled.YourCategories>
  );
};

export default YourCategories;

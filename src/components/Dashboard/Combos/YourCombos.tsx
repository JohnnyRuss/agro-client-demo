import {
  useGetCombosQuery,
  useDeleteComboQuery,
} from "@/hooks/api/dashboard/combos";

import * as Styled from "./styles/yourCombos.styled";
import { StandSpinner, ErrorMessage, ComboCard } from "@/components/Layouts";

const YourCombos: React.FC = () => {
  const { data, status } = useGetCombosQuery();
  const { deleteComboQuery, status: deleteStatus } = useDeleteComboQuery();

  const loading = status.loading || deleteStatus.loading;
  const errorMessage = status.message || deleteStatus.message;
  const hasError = status.error || deleteStatus.error;

  return (
    <Styled.YourCombos>
      {status.status === "SUCCESS" && (
        <div className="combos-list">
          {data.map((combo) => (
            <ComboCard
              redirectPath=""
              combo={combo}
              key={combo._id}
              onDelete={deleteComboQuery}
            />
          ))}
        </div>
      )}

      {hasError && <ErrorMessage message={errorMessage} />}

      {loading && <StandSpinner />}
    </Styled.YourCombos>
  );
};

export default YourCombos;

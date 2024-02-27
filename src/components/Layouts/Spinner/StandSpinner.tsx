import * as Styled from "./spinner.styled";

type StandSpinnerT = {};

const StandSpinner: React.FC<StandSpinnerT> = () => {
  return (
    <Styled.StandSpinner className="scroll-block">
      <span className="loader"></span>
    </Styled.StandSpinner>
  );
};

export default StandSpinner;

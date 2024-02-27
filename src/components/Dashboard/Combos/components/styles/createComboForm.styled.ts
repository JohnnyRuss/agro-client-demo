import styled from "styled-components";

export const CreateComboForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem 0;
    border-radius: 0.5rem;

    &.media {
      background-color: ${({ theme }) => theme.colors.green};
    }

    &.publish {
      background-color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

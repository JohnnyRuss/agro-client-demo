import styled from "styled-components";

export const CreateCategory = styled.div`
  padding: 3rem 2rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;

  .create-category__title {
    position: absolute;
    top: 2rem;
    left: 3rem;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 2rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${({ theme }) => theme.fontSize.h3};
    }
  }

  .create-category__form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 38rem;
  }

  .create-category__btn {
    width: 100%;
    padding: 1.2rem;
    border-radius: 0.4rem;
  }
`;

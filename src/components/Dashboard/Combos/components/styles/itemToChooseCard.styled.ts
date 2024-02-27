import styled from "styled-components";

export const ItemToChooseCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  h4[data-line-clamp] {
    text-transform: capitalize;
  }

  .item--fig {
    width: 11rem;
    height: 11rem;
    overflow: hidden;
    border-radius: 0.5rem;

    img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }

  .item--details {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    strong {
      font-weight: 600;
    }
  }

  .item--actions {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: auto;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    strong {
      font-weight: 600;
    }

    .size-box {
      select {
        outline: none;
      }
    }

    .add-btn {
      padding: 0.25rem 1rem;
      border-radius: 0.5rem;

      &.danger {
        svg {
          font-size: ${({ theme }) => theme.fontSize.xl} !important;
        }
      }
    }

    .control-quantity {
      display: flex;
      align-items: center;
      gap: 1rem;

      input {
        width: 5rem;
        height: 3rem;
        outline: none;
        border: 1px solid ${({ theme }) => theme.colors.gray_shade};
        border-radius: 0.4rem;
        text-align: center;

        &::-webkit-inner-spin-button {
          display: none;
        }
      }
    }
  }
`;
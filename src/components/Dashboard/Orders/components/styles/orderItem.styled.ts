import styled from "styled-components";

export const OrderItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  .order-fig {
    width: 15rem;
    height: 15rem;
    border-radius: 0.5rem;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .order-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .grid-box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;

    &__sub {
      display: flex;
      align-items: center;
      gap: 0.25rem;

      span:first-child {
        font-weight: 500;
      }

      span:last-child {
        color: ${({ theme }) => theme.colors.gray_shade};
      }

      .view-invoice__btn {
        padding: 0.5rem 2rem;
        border-radius: 0.25rem;
      }
    }
  }
`;

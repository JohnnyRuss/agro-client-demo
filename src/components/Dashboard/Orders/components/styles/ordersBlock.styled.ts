import styled from "styled-components";

export const OrdersBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .order-block__date {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 500;
  }

  .order-block__list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

import styled from "styled-components";

export const ShortenOrdersList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  li {
    padding: 0 1rem 1rem 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      font-size: ${({ theme }) => theme.fontSize.base};
    }

    div span:first-child {
      font-weight: 600;
    }

    div span:last-child {
      color: ${({ theme }) => theme.colors.gray_dark};
    }
  }
`;

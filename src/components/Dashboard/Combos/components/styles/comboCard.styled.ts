import styled from "styled-components";

export const ComboCard = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .combo-assets {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: relative;
    width: 100%;
    height: 20rem;
    overflow: hidden;
    border-radius: 0.5rem;
    position: relative;
    background-color: ${({ theme }) => theme.colors.gray};

    img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      transition: all 0.3s ease;

      &:hover {
        position: absolute;
      }
    }
  }

  .combo-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h4[data-line-clamp] {
      font-size: ${({ theme }) => theme.fontSize.base};
    }

    div[data-line-clamp] {
      color: ${({ theme }) => theme.colors.gray_shade};
      font-size: ${({ theme }) => theme.fontSize.sm};
    }

    &--duplex {
      display: flex;
      justify-content: space-between;

      div {
        display: flex;
        align-items: center;
      }

      div > span:first-child {
        text-transform: capitalize;
        font-weight: 500;
      }

      div > span:last-child {
        color: ${({ theme }) => theme.colors.gray_shade};
      }

      button {
        width: calc(50% - 1rem);
      }
    }
  }
`;

import styled from "styled-components";
import { scrollbar } from "@/styles/utils";

export const ChooseThumbnails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;

  .assets-box--head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: ${({ theme }) => theme.fontSize.sm};
      font-weight: 500;
    }

    span strong {
      color: ${({ theme }) => theme.colors.green};
    }

    &__back-btn {
      color: ${({ theme }) => theme.colors.gray_dark};
      font-size: ${({ theme }) => theme.fontSize.xxl};
      width: max-content;
      display: flex;
      align-items: center;
    }
  }

  .assets-box__list-wrapper {
    max-width: 100%;
    overflow-y: auto;
    ${scrollbar};
  }

  .assets-box__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding-right: 1rem;

    img {
      width: 100%;
      height: 10rem;
      border-radius: 0.2rem;
      cursor: pointer;
    }
  }

  .assets-box__done-btn {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.green};
    margin-top: auto;
    text-transform: uppercase;
    padding: 1rem 0;
    border-radius: 0.5rem;
  }
`;

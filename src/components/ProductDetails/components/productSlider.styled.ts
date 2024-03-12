import styled from "styled-components";

export const ProductSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  .react-multi-carousel-list {
    width: 55rem;
    max-width: 100%;
    height: 10rem;

    figure {
      width: 10rem;
      height: 10rem;
      overflow: hidden;
    }

    figure img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
    }
  }

  .magnify-app--box {
    width: 55rem !important;
    height: 40rem !important;
    display: flex;
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    gap: 1rem;

    .magnify-app--box {
      width: 45rem !important;
      height: 35rem !important;
    }

    .react-multi-carousel-list {
      width: 45rem;

      figure {
        width: 8rem;
        height: 8rem;
      }

      button {
        min-width: 3.75rem !important;
        min-height: 3.75rem !important;
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
    gap: 0.5rem;

    .magnify-app--box {
      width: 95vw !important;
      min-height: 88vw !important;
      aspect-ratio: 1/1 !important;
    }

    .react-multi-carousel-list {
      width: 95vw;

      figure {
        width: 7rem;
        height: 7rem;
      }
    }
  }
`;

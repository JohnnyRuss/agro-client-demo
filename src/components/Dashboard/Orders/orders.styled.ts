import styled from "styled-components";

export const Orders = styled.div`
  height: 93vh;
  display: flex;
  flex-direction: column;

  .orders__content-box {
    display: flex;
    border-top: 1px solid ${({ theme }) => theme.colors.gray};
    height: 100%;
    overflow: hidden;
  }

  .invoice {
    flex: 1;
    padding: 2rem;

    figure {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      object-fit: contain;
      max-height: 100%;
      max-width: 70%;
    }
  }
`;

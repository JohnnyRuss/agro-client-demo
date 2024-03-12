import styled from "styled-components";

export const AllProducts = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

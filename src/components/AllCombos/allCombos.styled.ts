import styled from "styled-components";

export const AllCombos = styled.div`
  padding-top: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

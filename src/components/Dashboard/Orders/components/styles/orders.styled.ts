import styled from "styled-components";
import { scrollbar } from "@/styles/utils";

export const Orders = styled.div`
  flex: 1;
  border-right: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 2rem;

  .orders {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 4rem;
    height: 85vh;
    overflow-y: auto;
    ${scrollbar};
  }
`;
